import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!title.trim() || !description.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      title,
      description,
      status: "todo", // Default status is 'todo'
    };

    addTask(newTask); // Add the new task
    setTitle(""); // Clear the form fields
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            display: "block",
            margin: "0.5rem 0",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            display: "block",
            margin: "0.5rem 0",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
            minHeight: "100px",
          }}
        ></textarea>
      </div>
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
