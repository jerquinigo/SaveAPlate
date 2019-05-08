import MainSnackbar from "../components/profiles/clientProfiles/MainSnackbar.js";
import { connect } from "react-redux";
import { receivedOpenSnackbar } from "../actions/MainSnackbar.js";
import { receivedCloseSnackbar } from "../actions/MainSnackbar.js";

const mapStateToProps = state => {
  return {
    snackbarStatus: state.mainSnackbar.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receivedOpenSnackbar: () => dispatch(receivedOpenSnackbar()),
    receivedCloseSnackbar: () => dispatch(receivedCloseSnackbar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSnackbar);
