import Feed from "../components/feed/Feed.js";
import { connect } from "react-redux";
import { receivedOpenSnackbar } from "../actions/MainSnackbar.js";

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receivedOpenSnackbar: () => dispatch(receivedOpenSnackbar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
