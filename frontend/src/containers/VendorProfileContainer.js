import VendorProfile from "../components/profiles/vendorProfiles/VendorProfile.js";
import { connect } from "react-redux";

const mapStateToProps = state => {

  return {
    currentUser: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(VendorProfile);
