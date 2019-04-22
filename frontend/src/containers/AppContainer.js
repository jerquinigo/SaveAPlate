import App from "../App.js";
import { connect } from "react-redux";

const mapStateToProps = state => {

  return {
    currentUser: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
