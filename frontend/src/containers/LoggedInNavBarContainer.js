import LoggedInNavBar from "../components/navBar/LoggedInNavBar.js";
import { connect } from "react-redux";

const mapStateToProps = state => {

  return {
    currentUser: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(LoggedInNavBar);
