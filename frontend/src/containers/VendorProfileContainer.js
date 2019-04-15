import VendorProfile from "../components/profiles/VendorProfile";
import { connect } from "react-redux";

const mapStateToProps = state => {
  debugger
  return {
    currentUser: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(VendorProfile);
