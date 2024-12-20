import { combineReducers } from "redux";
import { ProductReducer } from "./Reducer";

const rootReducer = combineReducers({
    products : ProductReducer,

})

export default rootReducer;