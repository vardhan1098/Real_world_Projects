import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("please Add Todo..");
    } else {
      let newTodo = {
        id: new Date().getTime(),
        title: inputValue,
      };
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setInputValue("");
    }
  };

  const handleEditTodo = (id) => {
    const exisitngTodo = todos.find((item) => item.id === id);
    setEditId(id);
    setInputValue(exisitngTodo.title);
    setIsEditing(true);
  };

  const handleUpdateTodo = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === editId ? { ...todo, title: inputValue } : todo
      )
    );
    setInputValue("");
    setEditId(null);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <>
        <input
          type="text"
          placeholder="Enter a Todo.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isEditing ? (
          <Modal
            handleUpdateTodo={handleUpdateTodo}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        ) : (
          <button onClick={handleAddTodo} aria-label="btn">
            AddTodo
          </button>
        )}
      </>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <button>❌</button>
            <button onClick={() => handleEditTodo(todo.id)}>🖊️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
