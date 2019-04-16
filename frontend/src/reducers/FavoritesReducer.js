import {SET_FAVORITE} from "../actions/ActionTypes.js";

const setFavoriteReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FOOD_ITEMS_BY_VENDOR:
      return normalize(action.fooditems);
    default:
      return oldState;
  }
};

export default FoodItemsReducer;
