import { applyMiddleware, createStore } from "redux";
import { fetchReducer } from "../Reducer/Reducer";
import { thunk } from "redux-thunk";

const store = createStore(fetchReducer, applyMiddleware(thunk));
export default store;
