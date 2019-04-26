import { LoggedInNavBar } from "../components/navBar/LoggedInNavBar.js";
import { connect } from "react-redux";
import { logoutUser } from "../actions/AuthActions.js";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoggedInNavBar)
);
