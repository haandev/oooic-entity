import { Entity } from "@/app/model/Entity";
import { ExpressMiddleware } from "@/types/express";
import { IEntity } from "@/app/controller/Entity/types";

export const create: ExpressMiddleware<IEntity.Request.create> = async (
  request,
  response
) => {
  try {
    const result = await Entity.create(request.body);
    response.send(result);
  } catch (error) {
    response.status(500).send("Server error");
  }
};
