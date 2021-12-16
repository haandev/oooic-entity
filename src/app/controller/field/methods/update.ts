import { Field } from "@/app/model/Field";
import { ExpressMiddleware } from "@/types/express";
import { IField } from "@/app/controller/Field/types";

export const update: ExpressMiddleware<IField.Request.update> = async (
  request,
  response
) => {
  try {
    const { id } = request.params;
    response.send(
      await Field.update({ ...request.body }, { where: { id: Number(id) } })
    );
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};
