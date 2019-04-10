import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import AuthReducer from "./AuthReducer.js";

const rootReducer = combineReducers({
  users: userReducer,
  auth: AuthReducer
});

export default rootReducer;
