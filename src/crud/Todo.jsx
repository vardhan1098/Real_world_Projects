import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("please add a todo");
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleEditTodo = (id) => {
    const updateTodos = todos.find((item) => item.id === id);
    setEditId(id);
    setInputValue(updateTodos.title);
    setIsEditing(true);
  };

  const handleUpdateTodo = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === editId ? { ...todo, title: inputValue } : todo
      )
    );
    setEditId(null);
    setInputValue("");
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Todo.."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {isEditing ? (
        <button onClick={handleUpdateTodo}>UpdateTodo</button>
      ) : (
        <button onClick={handleAddTodo}>AddTodo</button>
      )}
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <button onClick={() => handleEditTodo(todo.id)}>🖊️</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
