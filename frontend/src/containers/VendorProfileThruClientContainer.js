import VendorProfileThruClient  from "../components/profiles/vendorProfiles/VendorProfileThruClient.js";
import { connect } from "react-redux";

const mapStateToProps = state => {

  return {
    currentUser: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(VendorProfileThruClient );
