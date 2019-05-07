import VendorProfile from "../components/profiles/vendorProfiles/VendorProfile.js";
import { connect } from "react-redux";
import { fetchUserFoodItems } from "../actions/FoodItemsActions.js";
import { withRouter } from "react-router-dom";
import { receivedOpenSnackbar } from "../actions/MainSnackbar.js";

const mapStateToProps = state => {
  return {
    currentUser: state.auth,
    fooditems: state.fooditems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserFoodItems: id => dispatch(fetchUserFoodItems(id)),
    receivedOpenSnackbar: () => dispatch(receivedOpenSnackbar())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VendorProfile)
);
