/**
 * This file used for documenting the API while learning how to build a RESTful API.
 * Showing the old and new way of structuring the application.
 */

import express from "express";

/** OLD WAY - without separate files */

// This import is just for demonstration purposes to show how you might structure your application. In a real application, you would want to separate these concerns into different files as shown in the previous snippets.
import {  Request, Response } from "express";
import { pool } from "./db/db";

const app = express();

// This is an example of endpoints, routes, controllers, and models without using separate files. This is just for demonstration purposes; in a real application, you would want to separate these concerns into different files as shown in the previous snippets.
app.get("/api/todos/", async (req: Request, res: Response) => { // This is the route handler for GET /api/todos
  // This is the controller logic for getting all todos. In a real application, you would call a model function here to get the data from the database.
  try {
    // This is an example of how you might query the database using the pool from db.ts. 
    // In a real application, you would want to move this logic into a model function in a separate file.
    const todos = await pool.query("SELECT * FROM todos"); 
    
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});