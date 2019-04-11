import { RECEIVED_ALL_USERS } from "../actions/ActionTypes.js";

let initialState = {};
const userReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case RECEIVED_ALL_USERS:
      return normalize(action.users);
    default:
      return oldState;
  }
};

export default userReducer;

function normalize(arr) {
  let obj = {};
  arr.forEach(el => {
    obj[el.id] = el;
  });
  return obj;
}
