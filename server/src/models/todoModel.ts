import { pool } from "../db/db"

export const getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM todolists")
  return result.rows
}