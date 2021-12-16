import express from "express"
const router = express.Router();

import * as Field from "../controller/field";

router.get("/", Field.getAll);
router.get("/:id", Field.getById);
router.post("/", Field.create);

export default router;