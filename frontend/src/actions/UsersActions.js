import * as usersApi from "../utils/UtilUsers.js";
import { RECEIVED_ALL_USERS } from "./ActionTypes.js";

export const receivedAllUsers = users => {
  return {
    type: RECEIVED_ALL_USERS,
    users: users
  };
};

export const fetchAllUsers = () => dispatch => {
  return usersApi
    .getAllUsers()
    .then(res => {
      return dispatch(receivedAllUsers(res.data.users));
    })
    .catch(err => {
      console.log(err);
    });
};
