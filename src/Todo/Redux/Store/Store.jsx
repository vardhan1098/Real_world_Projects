import { createStore } from "redux";
import { TodoReducer } from "../Reducer/Reducer";

const store = createStore(TodoReducer);

export default store;
