import {combineReducers} from "redux"
import userReducer from "./userReducer.js"

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
