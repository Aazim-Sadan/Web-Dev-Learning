"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controller/todo");
const router = express_1.default.Router();
router.route("/").post(todo_1.createTodo); // create Todo
router.route("/").get(todo_1.getTodo); // get Todo
router.route("/:todoId").patch(todo_1.updateTodo); // update Todo
router.route("/:todoId").delete(todo_1.deleteTodo); // delete Todo
exports.default = router;
