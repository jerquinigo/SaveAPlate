import axios from "axios";
import { SET_FAVORITE } from "./ActionTypes.js";

export const setFavorite = (client_id, vendor_id) => dispatch => {
  return axios.post("/api/favorites/", {client_id, vendor_id}).then(data => {
    console.log(data);
    return dispatch({type: "FAVORITE_SAVED_NOT_IMPLEMENTED"})
  });
};
