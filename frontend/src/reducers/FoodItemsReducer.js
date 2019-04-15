import {RECEIVE_FOOD_ITEMS_BY_VENDOR} from "../actions/ActionTypes.js";

let initialState = {
  fooditems: null
};

const FoodItemsReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case RECEIVE_FOOD_ITEMS_BY_VENDOR:
      return normalize(action.fooditems);
    default:
      return oldState;
  }
};

export default FoodItemsReducer;

function normalize(arr) {
  let obj = {};
  arr.forEach(el => {
    obj[el.id] = el;
  });
  return obj;
}
