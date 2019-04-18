import Feed from "../components/feed/Feed.js";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.auth
  };
};


export default connect(
  mapStateToProps,
  null
)(Feed);
