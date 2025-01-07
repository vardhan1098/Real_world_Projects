import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskSection = ({ title, status, tasks, onDragStart, onDrop }) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e) => {
    onDrop(e, status);
    setIsOver(false);
  };

  console.log("Tasks in TaskSection:", tasks); 

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        flex: "1",
        border: isOver ? "2px dashed #4caf50" : "1px solid black",
        padding: "1rem",
        backgroundColor: isOver ? "#e8f5e9" : "white",
        borderRadius: "8px",
      }}
    >
      <h2
        style={{
          backgroundColor: "#809D3C",
          color: "white",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>
      {tasks.map((task) => (
        <TaskCard
          key={task._id || task.id}
          task={task}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
};

export default TaskSection;
