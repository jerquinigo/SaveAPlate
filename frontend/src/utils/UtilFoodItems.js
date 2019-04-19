import axios from "axios";

export const getFoodItemsByVendor = (name) => {
  return axios.get(`/api/fooditems/vendor/${name}`);
};
