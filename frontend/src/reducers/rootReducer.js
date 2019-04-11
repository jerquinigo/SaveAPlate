import { combineReducers } from "redux";
import UserReducer from "./UserReducer.js";
import AuthReducer from "./AuthReducer.js";

const rootReducer = combineReducers({
  users: UserReducer,
  auth: AuthReducer
});

export default rootReducer;
