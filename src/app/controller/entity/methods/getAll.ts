import { Entity } from "@/app/model/Entity";
import { ExpressMiddleware } from "@/types/express";
import { IEntity } from "@/app/controller/Entity/types";

export const getAll: ExpressMiddleware = async (_request, response) => {
  try {
    response.send(await Entity.findAll());
  } catch (error) {
    response.status(500).send("Server error");
  }
};
