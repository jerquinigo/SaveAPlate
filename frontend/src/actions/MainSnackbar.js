import { OPEN_SNACKBAR } from "./ActionTypes.js";
import { CLOSE_SNACKBAR } from "./ActionTypes.js";

export const receivedOpenSnackbar = () => {
  return {
    type: OPEN_SNACKBAR,
    status: true
  };
};

export const receivedCloseSnackbar = () => {
  return {
    type: CLOSE_SNACKBAR,
    status: false
  };
};
