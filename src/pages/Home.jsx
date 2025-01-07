import React, { useState } from "react";
import bluespiral from "../assets/blue_Task.jpg";
import "../styles/Home.css";
import { useNavigate } from "react-router";

const Home = () => {
const navigate = useNavigate();
 
const handleOpen = () =>{
  navigate("/tasks")
}

  return (
    <div className="contain">
      <h2>Welcome to Task Manager</h2>
      <p>Manage your tasks efficiently!</p>
      <>
        <button className="btn-box" onClick={handleOpen}>
          {" "}
          +Add Task
        </button>
      </>
    </div>
  );
};

export default Home;
