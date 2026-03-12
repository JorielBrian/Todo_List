import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { logger } from "./middleware/logger";
import todoRoutes from "./routes/todoRoutes"

dotenv.config()

const app = express()

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/todos', todoRoutes)

// Get all todos
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "API running" })
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