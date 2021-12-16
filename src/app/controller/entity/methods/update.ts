import { Entity } from "@/app/model/Entity";
import { ExpressMiddleware } from "@/types/express";
import { IEntity } from "@/app/controller/Entity/types";

export const update: ExpressMiddleware<IEntity.Request.update> = async (
  request,
  response
) => {
  try {
    const { id } = request.params;
    response.send(
      await Entity.update(request.body, { where: { id: Number(id) } })
    );
    response.sendStatus(200);
  } catch (error) {
    response.status(500).send("Server error");
  }
};
