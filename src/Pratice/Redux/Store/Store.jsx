import { applyMiddleware, createStore } from "redux";
import { ProductReducer } from "../Reducer/Reducer";
import { thunk } from "redux-thunk";


const store = createStore(ProductReducer , applyMiddleware(thunk));

export default store;