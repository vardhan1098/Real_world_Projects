import React, { useEffect, useReducer, useState } from "react";

const Crud = () => {
  const reducer = (state, action) => {
    if (action.type === "UPDATE_USERS") {
      return {
        ...state,
        usersData: action.payload,
        isLoading: false,
        isError: { status: false, message: "" },
      };
    }
    if (action.type === "LOADING") {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    if (action.type === "ERROR") {
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    }
    if (action.type === "DELETE_USER") {
      const newUser = state.usersData.filter(
        (eachUser) => eachUser.id !== action.payload
      );
      return {
        ...state,
        usersData: newUser,
      };
    }
    if (action.type === "ONCLICK_EDIT") {
      return {
        ...state,
        isEditing: action.payload,
      };
    }
    return state;
  };

  const initialState = {
    usersData: [],
    isLoading: false,
    isError: { status: false, message: "" },
    isEditing: { status: false, id: "", name: "", email: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUserDetails = async (url) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const apiResponse = await fetch(url);
      const data = await apiResponse.json();
      dispatch({ type: "UPDATE_USERS", payload: data });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: "ERROR",
        payload: { status: true, message: "Error Got Found..!!" },
      });
    }
  };

  useEffect(() => {
    fetchUserDetails("https://jsonplaceholder.typicode.com/users");
  }, []);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const updateData = (id, title, email) => {
    const updatedUsers = state.usersData.map((user) =>
      user.id === id ? { ...user, name: title, email: email } : user
    );
    dispatch({ type: "UPDATE_USERS", payload: updatedUsers });
    dispatch({
      type: "ONCLICK_EDIT",
      payload: { status: false, id: "", name: "", email: "" },
    });
  };

  return (
    <div>
      <h2>Hello Users</h2>
      {state.isEditing.status && (
        <SelectedForm
          id={state.isEditing.id}
          Ctitle={state.isEditing.name}
          Cemail={state.isEditing.email}
          updateData={updateData}
        />
      )}
      {state.isLoading && <p>Loading...</p>}
      {state.isError.status && <p>Error: {state.isError.message}</p>}

      {state.usersData.length > 0 &&
        state.usersData.map((user) => {
          const { id, name, email } = user;
          return (
            <div key={id} style={{ backgroundColor: "purple", color: "white" }}>
              <h3>{name}</h3>
              <h4>{email}</h4>
              <button
                aria-label="Edit User"
                onClick={() =>
                  dispatch({
                    type: "ONCLICK_EDIT",
                    payload: { status: true, id, name, email },
                  })
                }
              >
                🖊️
              </button>
              <button
                aria-label="Delete User"
                onClick={() => handleDelete(id)}
              >
                ❌
              </button>
            </div>
          );
        })}
    </div>
  );
};

const SelectedForm = ({ id, Ctitle, Cemail, updateData }) => {
  const [title, setTitle] = useState(Ctitle || "");
  const [email, setEmail] = useState(Cemail || "");
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            updateData(id, title, email);
          }}
        >
          UpdateUser
        </button>
      </form>
    </>
  );
};

export default Crud;
