import Auth from "../utils/Auth.js";
import axios from "axios";
import { RECEIVE_USER } from "./ActionTypes.js";

export const receiveUserStatus = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const checkAuthenticateStatus = () => dispatch => {
  return axios.get("/api/sessions/isLoggedIn").then(user => {
    if (user.data.email === Auth.getToken()) {
      return dispatch(
        receiveUserStatus({
          isLoggedIn: Auth.isUserAuthenticated(),
          user: Auth.getToken(),
          userInfoObj: user.data
        })
      );
    } else {
      if (user.data.email) {
        logoutUser();
      } else {
        Auth.deauthenticateUser();
      }
    }
  });
};

export const logoutUser = () => dispatch => {
  return axios
    .post("/api/sessions/logout")
    .then(() => {
      Auth.deauthenticateUser();
    })
    .then(() => {
      checkAuthenticateStatus();
      dispatch(
        receiveUserStatus({
          isLoggedIn: false,
          userInfoObj: { email: null }
        })
      );
    });
};
