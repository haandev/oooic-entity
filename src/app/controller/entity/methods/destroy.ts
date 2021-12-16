import { Entity } from "@/app/model/Entity";
import { ExpressMiddleware } from "@/types/express";
import { IEntity } from "@/app/controller/Entity/types";

export const destroy: ExpressMiddleware<IEntity.Request.destroy> = async (
  request,
  response
) => {
  try {
    const { id } = request.params;
    await Entity.destroy({ where: { id: Number(id) } });
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};
