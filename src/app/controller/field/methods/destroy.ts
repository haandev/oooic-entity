import { Field } from "@/app/model/Field";
import { ExpressMiddleware } from "@/types/express";
import { IField } from "@/app/controller/Field/types";

export const destroy: ExpressMiddleware<IField.Request.destroy> = async (
  request,
  response
) => {
  try {
    const { id } = request.params;
    await Field.destroy({ where: { id: Number(id) } });
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};
