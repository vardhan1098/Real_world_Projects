import React from "react";

const Modal = ({ handleUpdateTodo, inputValue, setInputValue }) => {
  return (
    <div
      style={{
        position: "fixed",
        height: "50vh",
        top:0,
        width: "50vw",
        opacity: "2",
        backgroundColor: "white",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        zIndex: "1000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "white", color: "black", padding: "5px" }}>
        <input
          type="text"
          value={inputValue}
          placeholder="Update a Todo.."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleUpdateTodo}>UpdateTodo</button>
      </div>
    </div>
  );
};

export default Modal;
