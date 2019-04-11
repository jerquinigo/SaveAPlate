import DemoLogin from "../components/auth/DemoLogin.js";
import { connect } from "react-redux";
import { checkAuthenticateStatus } from "../actions/AuthActions.js";

// const mapStateToProps = state => {
//   debugger
//   return {
//     currentUser: state.auth
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DemoLogin);
