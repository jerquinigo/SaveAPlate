import { combineReducers } from "redux";
import UserReducer from "./UserReducer.js";
import AuthReducer from "./AuthReducer.js";

const RootReducer = combineReducers({
  users: UserReducer,
  auth: AuthReducer
});

export default RootReducer;
