import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please Add A TODO..");
    } else {
      let newTodo = {
        id: new Date().getTime(),
        title: inputValue,
        completed: false,
      };
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setInputValue("");
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setInputValue(todo.title);
    setIsEditing(true);
  };

  const handleUpdateTodo = () => {
    if (inputValue.trim() === "") {
      alert("please add a todo..");
    } else {
      setTodos((prevTodo) =>
        prevTodo.map((item) =>
          item.id === editId ? { ...item, title: inputValue } : item
        )
      );
      setEditId(null);
      setIsEditing(false);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Todo-List</h2>
      <>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a Todo."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        {isEditing ? (
          <button onClick={handleUpdateTodo}>UpdateTodo</button>
        ) : (
          <button onClick={handleAddTodo}>AddTodo</button>
        )}
      </>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ border: "1px solid black", marginTop: "10px" }}
          >
            <h3>{todo.title}</h3>
            <button
              onClick={() => {
                handleEdit(todo);
              }}
            >
              🖊️
            </button>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </div>
        ))}
      </div>
      {todos.length === 0 && <p>No Todos Found..</p>}
    </div>
  );
};

export default Todo;
