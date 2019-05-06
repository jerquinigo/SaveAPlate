import { OPEN_SNACKBAR } from "./ActionTypes.js";
import { CLOSE_SNACKBAR } from "./ActionTypes.js";

export const receivedOpenSnackbar = () => {
  debugger;
  return {
    type: OPEN_SNACKBAR,
    status: true
  };
};

export const receivedCloseSnackbar = () => {
  debugger;
  return {
    type: CLOSE_SNACKBAR,
    status: false
  };
};
