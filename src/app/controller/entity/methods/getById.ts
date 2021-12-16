import { Entity } from "@/app/model/Entity";
import { ExpressMiddleware } from "@/types/express";
import { IEntity } from "@/app/controller/Entity/types";

export const getById: ExpressMiddleware<IEntity.Request.getById> = async (
  request,
  response
) => {
  try {
    const { id } = request.params;
    response.send(
      await Entity.findOne({
        where: { id: Number(id) },
      })
    );
  } catch (error) {
    response.status(500).send("Server error");
  }
};
