"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODO = [];
const createTodo = (req, res) => {
    //   const text = (req.body as {text: string}).text;
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({ message: "Todo created", newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res) => {
    res.status(200).json(TODO);
};
exports.getTodo = getTodo;
const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    const text = req.body.text;
    const todoIndex = TODO.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Todo not found");
    }
    TODO[todoIndex] = new todo_1.Todo(TODO[todoIndex].id, text);
    console.log(TODO[todoIndex]);
    res.status(200).json({ message: "Todo updated", newTodo: TODO[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = TODO.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("Todo not found");
    }
    TODO.splice(todoIndex, 1);
    res.status(200).json({ message: "Todo deleted" });
};
exports.deleteTodo = deleteTodo;
