import { combineReducers } from "redux";
import UserReducer from "./UserReducer.js";
import AuthReducer from "./AuthReducer.js";
import FoodItemsReducer from "./FoodItemsReducer.js";
import MainSnackbarReducer from "./MainSnackbarReducer.js";

const RootReducer = combineReducers({
  users: UserReducer,
  auth: AuthReducer,
  fooditems: FoodItemsReducer,
  mainSnackbar: MainSnackbarReducer
});

export default RootReducer;
