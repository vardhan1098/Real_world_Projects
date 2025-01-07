import React from "react";
import TaskForm from "../components/Task/TaskForm";
import TaskList from "../components/Task/TaskList";

const Task = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Task;
