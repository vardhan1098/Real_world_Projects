const express = require("express");
const {
  getTasks,
  addTask,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskController");
const protect = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", protect, getTasks); // Get all tasks
router.post("/", protect, addTask); // Add a new task
router.put("/:id", protect, updateTaskStatus); // Update task status
router.delete("/:id", protect, deleteTask); // Delete a task

module.exports = router;
