import express from "express"
const router = express.Router();

import * as Entity from "../controller/entity";

router.get("/", Entity.getAll);
router.get("/:id", Entity.getById);
router.post("/", Entity.create);

export default router;