import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk"; //checking if its a function or an action after we dispatch
import RootReducer from "../reducers/RootReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(
  applyMiddleware(logger, thunk)
));
console.log(store.getState(), "STORE");
export default store;
