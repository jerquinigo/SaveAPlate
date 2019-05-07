import ClientProfile from "../components/profiles/clientProfiles/ClientProfile";
import { connect } from "react-redux";
import { checkAuthenticateStatus } from "../actions/AuthActions.js";
import { receivedOpenSnackbar } from "../actions/MainSnackbar.js";

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    receivedOpenSnackbar: () => dispatch(receivedOpenSnackbar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientProfile);
