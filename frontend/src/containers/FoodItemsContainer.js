import VendorProfile from "../components/profiles/VendorProfile.js";
import { connect } from "react-redux";
import {fetchUserFoodItems} from "../actions/FoodItemsActions.js";
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => {
  return {
    currentUser: state.auth,
    fooditems: state.fooditems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserFoodItems: (id) => dispatch(fetchUserFoodItems(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VendorProfile));
