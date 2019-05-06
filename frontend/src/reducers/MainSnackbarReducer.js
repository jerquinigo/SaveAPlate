import { OPEN_SNACKBAR } from "../actions/ActionTypes.js";
import { CLOSE_SNACKBAR } from "../actions/ActionTypes.js";

let initialState = {
  status: false
};

const MainSnackbarReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      debugger;
      return { status: action.status };
    case CLOSE_SNACKBAR:
      return { status: action.status };
    default:
      return oldState;
  }
};

export default MainSnackbarReducer;
