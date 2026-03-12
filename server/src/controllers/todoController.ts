// import { Request, Response } from "express"
// import { getAllTodos } from "../models/todoModel"

// export const getTodos = async (req: Request, res: Response) => {
//   const todos = await getAllTodos()
//   res.json(todos)
// }

import { Request, Response } from "express";
import {
  getAllTodos,
  createTodo,
  updateTodoStatus,
  deleteTodo,
} from "../models/todoModel";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const todo = await createTodo(title);
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { completed } = req.body;
    await updateTodoStatus(id, completed);
    res.json({ message: "Todo updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTodoController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await deleteTodo(id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};