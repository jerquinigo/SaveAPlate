import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import AddItemForm from "./AddItemsForm.js";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: "50em",
    outline: "none"
  }
});

class SimpleModal extends React.Component {
  render() {
    debugger;
    return (
      <div>
        <Modal open={this.props.open} onClose={this.props.handleClose}>
          <div
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
            className={this.props.classes.paper}>
            <AddItemForm
              handleChange={this.props.handleChange}
              submitItem={this.props.submitItem}
              receivedOpenSnackbar={this.props.receivedOpenSnackbar}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleModal);
