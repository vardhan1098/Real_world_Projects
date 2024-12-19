import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 5;
  const totalPages = Math.ceil(todo.length / totalItems);

  const currentTodo = todo.slice(
    (currentPage - 1) * totalItems,
    currentPage * totalItems
  );

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please Add the Todo..");
    } else {
      let newTodo = {
        title: inputValue,
        id: new Date().getTime(),
      };
      setTodo((prevTodo) => [...prevTodo, newTodo]);
      setInputValue("");
    }
  };

  const handleEdit = (id) => {
    const exisitngTodo = todo.find((item) => item.id === id);
    setInputValue(exisitngTodo.title);
    setEditId(id);
    setIsEditing(true);
  };

  const handleUpdateTodo = () => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === editId ? { ...item, title: inputValue } : item
      )
    );
    setInputValue("");
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div>
      <h1>Hello Todo</h1>
      <div>
        <input
          type="text"
          placeholder="Enter A todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isEditing ? (
          <button onClick={handleUpdateTodo}>UpdateTodo</button>
        ) : (
          <button onClick={handleAddTodo}>Add Todo</button>
        )}
      </div>
      <div>
        {currentTodo.map((item) => (
          <div
            key={item.id}
            style={{ margin: "10px", justifyContent: "space-around" }}
          >
            <h3>{item.title}</h3>
            <button
              style={{
                padding: "4px 10px",
                backgroundColor: "black",
                border: "none",
              }}
            >
              ❌
            </button>
            <button onClick={() => handleEdit(item.id)}>🖊️</button>
          </div>
        ))}
      </div>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pagenum) => (
            <button key={pagenum} onClick={() => setCurrentPage(pagenum)}>
              {pagenum}
            </button>
          )
        )}
      
    </div>
  );
};

export default Todo;
