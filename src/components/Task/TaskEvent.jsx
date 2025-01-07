import React, { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskSection from "./TaskSection";

const TaskEvent = () => {
  const { tasks, setTasks, moveTask } = useContext(TaskContext);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/tasks", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch tasks: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data); // Update tasks using context
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };

    fetchTasks();
  }, [setTasks]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("application/json", JSON.stringify({ id }));
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const { id } = JSON.parse(e.dataTransfer.getData("application/json"));
    moveTask(id, status); // Update task's status
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", height: "90vh", gap: "1rem" }}>
      <TaskSection
        title="Todo"
        status="todo"
        tasks={tasks.filter((task) => task.status === "todo")}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
      />
      <TaskSection
        title="Doing"
        status="doing"
        tasks={tasks.filter((task) => task.status === "doing")}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
      />
      <TaskSection
        title="Completed"
        status="completed"
        tasks={tasks.filter((task) => task.status === "completed")}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
      />
    </div>
  );
};

export default TaskEvent;
