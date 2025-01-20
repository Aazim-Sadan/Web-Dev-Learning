"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(body_parser_1.default.json());
app.use("/todos", todo_1.default);
// Middleware to handle error any other request
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});
