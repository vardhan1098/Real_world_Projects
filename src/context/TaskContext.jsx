import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const removeTask = (id) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  const toggleComplete = (id) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const moveTask = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, removeTask, moveTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
};
