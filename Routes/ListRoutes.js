import express from "express";
import {
  addList,
  deletedList,
  getList,
  updateList,
} from "../Controllers/List.js";

const router = express.Router();

router.get("/List", getList);
router.post("/List", addList);
router.delete("/List/:id", deletedList);
router.put("/List/:id", updateList);

export default router;
