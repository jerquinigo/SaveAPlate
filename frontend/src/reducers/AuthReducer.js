import { RECEIVE_USER } from "../actions/ActionTypes.js";
import merge from "lodash/merge";

const initalState = {
  currentUser: null
};

const AuthReducer = (state = initalState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      let newState = merge({}, state);

      return (newState.currentUser = action.user.userInfoObj);

    default:
      return state;
  }
};

export default AuthReducer;
