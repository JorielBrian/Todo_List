import { Pool } from "pg"

export const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: Number(process.env.PORT_DB),
  database: process.env.DATABASE
})