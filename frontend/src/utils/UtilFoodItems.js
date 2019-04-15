import axios from "axios";

export const getFoodItemsByVendor = (id) => {
  return axios.get(`/api/fooditems/vendor/${id}`);
};
