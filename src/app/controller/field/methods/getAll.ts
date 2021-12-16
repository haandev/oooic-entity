import { Field } from "@/app/model/Field";
import { ExpressMiddleware } from "@/types/express";
import { IField } from "@/app/controller/Field/types";

export const getAll: ExpressMiddleware = async (_request, response) => {
  try {
    response.send(await Field.findAll());
  } catch (error) {
    response.status(500).send("Server error");
  }
};
