// import { Router } from "express"
// // import { getTodos, createTodo } from "../controllers/todoController"
// import { getTodos} from "../controllers/todoController"

// const router = Router()

// router.get("/", getTodos)
// // router.post("/", createTodo)

// export default router

import { Router } from "express";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodoController,
} from "../controllers/todoController";

const router = Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodoController);

export default router;