import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; //checking if its a function or an action after we dispatch
import rootReducer from '../reducers/rootReducer.js';


const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));
console.log(store.getState(), "STORE")
export default store;
