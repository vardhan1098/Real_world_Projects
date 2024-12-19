import { ADD_TODO, DELETE_TODO } from "../Actions/Action";

const initialState = {
  todo: [],
  completed: false,
};

export function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        title: action.payload.title,
        id: new Date().getTime(),
      };
      return { ...state, todo: [...state.todo, newTodo] };
    case DELETE_TODO:
      return {
        ...state,
        state: {
          ...state,
          todo: state.todo.filter((item) => item.id !== action.payload.id),
        },
      };
    default:
      return state;
  }
}
