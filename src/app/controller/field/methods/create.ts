import { Field } from "@/app/model/Field";
import { ExpressMiddleware } from "@/types/express";
import { IField, NativeType, InputType } from "@/app/controller/Field/types";
import { InputTypeEnum } from "../enums";
import { Entity } from "@/app/model/Entity";

const nativeTypeOf = {
  [InputTypeEnum.TextField]: "VARCHAR",
};

const computeNativeSettings = (
  inputSettings: InputType.Settings,
  nativeSettings: NativeType.Settings = {}
): NativeType.Settings => ({
  type: nativeTypeOf[inputSettings.type],
  length: inputSettings.maxLength || 255,
  notnull: !inputSettings.nullable,
  ...nativeSettings,
});

export const create: ExpressMiddleware<IField.Request.create> = async (
  request,
  response
) => {
  try {
    /* Start with flag entity as un-synced */
    await Entity.update(
      { synced: false },
      { where: { id: Number(request.body.entityId) } }
    );

    /* compute native fields options via inputSettings */
    const nativeSettings = computeNativeSettings(
      request.body.inputSettings,
      request.body.nativeSettings
    );

    /* create un-synced db field record */
    const result = await Field.create({ ...request.body, nativeSettings });
    response.send(result); 
  } catch (error) {
    console.log(error);
    response.status(500).send("Server error");
  }
};
