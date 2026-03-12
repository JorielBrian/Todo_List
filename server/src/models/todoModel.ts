// import { pool } from "../db/db"

// export const getAllTodos = async () => {
//   const result = await pool.query("SELECT * FROM todolists")
//   return result.rows
// }

import { pool } from "../db/db";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  created_at: Date;
}

export const getAllTodos = async (): Promise<Todo[]> => {
  const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
  return result.rows;
};

export const createTodo = async (title: string): Promise<Todo> => {
  const result = await pool.query(
    "INSERT INTO todos(title) VALUES($1) RETURNING *",
    [title]
  );
  return result.rows[0];
};

export const updateTodoStatus = async (
  id: number,
  completed: boolean
): Promise<void> => {
  await pool.query("UPDATE todos SET completed=$1 WHERE id=$2", [
    completed,
    id,
  ]);
};

export const deleteTodo = async (id: number): Promise<void> => {
  await pool.query("DELETE FROM todos WHERE id=$1", [id]);
};