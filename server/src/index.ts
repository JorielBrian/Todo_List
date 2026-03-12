import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { logger } from "./middleware/logger";
import todoRoutes from "./routes/todoRoutes"

/*
// This import is just for demonstration purposes to show how you might structure your application. In a real application, you would want to separate these concerns into different files as shown in the previous snippets.
import { Request, Response } from "express";
import { pool } from "./db/db";
*/

dotenv.config()

const app = express()

// Middleware
app.use(cors());
app.use(express.json()); // Built-in middleware to parse JSON bodies; it can be used res.json() to send JSON responses as well
app.use(logger);

// Routes
app.use('/api/todos', todoRoutes)

/*
// Here's an example of endpoints, routes, controllers, and models without using separate files. This is just for demonstration purposes; in a real application, you would want to separate these concerns into different files as shown in the previous snippets.  
// This example is meant to show how you might structure your application without using separate files, but it's generally not recommended for larger applications as it can become difficult to maintain and scale.
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
*/

// Get all todos
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "API running" }) //res.send("API running") this is the old way, but res.json is better for APIs as it sets the content-type to application/json
});

// Create a new todo
app.post("/", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "API running" })
});

// Update a todo
app.put("/:id", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "API running" })
});

// Delete a todo
app.delete("/:id", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "API running" })
});

// Get a single todo
app.get("/:id", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "API running" })
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});