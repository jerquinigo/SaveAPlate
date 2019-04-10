import { RECEIVE_USER } from "../actions/actionTypes.js";

const initalState = {
  currentUser: null
};

const AuthReducer = (state = initalState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return { currentUser: action.user };
    default:
      return state;
  }
};

export default AuthReducer;
