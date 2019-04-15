import { combineReducers } from "redux";
import UserReducer from "./UserReducer.js";
import AuthReducer from "./AuthReducer.js";
import FoodItemsReducer from "./FoodItemsReducer.js"

const RootReducer = combineReducers({
  users: UserReducer,
  auth: AuthReducer,
  fooditems: FoodItemsReducer
});

export default RootReducer;
