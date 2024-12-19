import { combineReducers } from "redux";
import CountReducer from "./reducer";
import { UserReducer } from "./userReducer";

const rootReducer = combineReducers({
    counter : CountReducer,
    user: UserReducer,
})

export default rootReducer;