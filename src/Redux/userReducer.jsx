import { UPDATE_USER } from "./action";

const initialState = {
  name: "",
  age: 0,
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
