import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

class MainSnackbar extends React.Component {
  render() {
    debugger;
    return (
      <div>
        <Button onClick={this.props.receivedOpenSnackbar}>SNACK</Button>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.props.snackbarStatus}
          autoHideDuration={3000}
          onClose={this.props.receivedCloseSnackbar}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Your request has been submitted</span>}
        />
      </div>
    );
  }
}

export default MainSnackbar;
