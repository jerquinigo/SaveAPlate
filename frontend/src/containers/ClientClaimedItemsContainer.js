import ClientClaimedItems from "../components/profiles/clientProfiles/ClientClaimedItems";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(ClientClaimedItems);
