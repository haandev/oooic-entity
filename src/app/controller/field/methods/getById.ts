import { Field } from "@/app/model/Field";
import { ExpressMiddleware } from "@/types/express";
import { IField } from "@/app/controller/Field/types";

export const getById: ExpressMiddleware<IField.Request.getById> = async (
  request,
  response
) => {
  try {
    const { id } = request.params;
    response.send(
      await Field.findOne({
        where: { id: Number(id) },
      })
    );
  } catch (error) {
    response.status(500).send("Server error");
  }
};
