import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controller/todo";

const router = express.Router();

router.route("/").post(createTodo); // create Todo
router.route("/").get(getTodo); // get Todo
router.route("/:todoId").patch(updateTodo); // update Todo
router.route("/:todoId").delete(deleteTodo); // delete Todo

export default router;
