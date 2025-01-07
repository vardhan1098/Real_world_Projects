import React from "react";

const TaskCard = ({ task, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id)} // Pass task ID to drag start
      style={{
        padding: "1rem",
        margin: "0.5rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        cursor: "grab",
      }}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
