import React from "react";
import Button from "@material-ui/core/Button";
import "./vendorProfilesCSS/AddItemsForm.css";

const AddItemForm = props => {
  return (
    <div className="donationFormWrapper">
      <h1 id="donation-form-header">Donation Form</h1>
      <div className="donationFormContainer">
        <form
          onSubmit={e => {
            props.submitItem(e);
            props.receivedOpenSnackbar();
          }}
          id="add-items-form">
          <input
            type="text"
            onChange={props.handleChange}
            name="name"
            placeholder="What dish are you donating?"
            id="input-name"
          />
          <br />
          <input
            type="text"
            onChange={props.handleChange}
            name="quantity"
            placeholder="How many people can this donation feed?"
            id="input-quantity"
          />
          <br />
          <div className="dropdownButtonContainer">
            <select
              onChange={props.handleChange}
              name="set_time"
              id="select-pickup-time">
              <option value="null"> Select Pick-Up Time </option>
              <option value="12:00"> 12:00 pm </option>
              <option value="13:00"> 1:00 pm </option>
              <option value="14:00"> 2:00 pm </option>
              <option value="15:00"> 3:00 pm </option>
              <option value="16:00"> 4:00 pm </option>
              <option value="17:00"> 5:00 pm </option>
              <option value="18:00"> 6:00 pm </option>
              <option value="19:00"> 7:00 pm </option>
              <option value="20:00"> 8:00 pm </option>
              <option value="21:00"> 9:00 pm </option>
              <option value="22:00"> 10:00 pm </option>
              <option value="23:00"> 11:00 pm </option>
              <option value="00:00"> 12:00 am </option>
              <option value="01:00"> 1:00 am </option>
              <option value="02:00"> 2:00 am </option>
              <option value="03:00"> 3:00 am </option>
              <option value="04:00"> 4:00 am </option>
              <option value="05:00"> 5:00 am </option>
              <option value="06:00"> 6:00 am </option>
              <option value="07:00"> 7:00 am </option>
              <option value="08:00"> 8:00 am </option>
              <option value="09:00"> 9:00 am </option>
              <option value="10:00"> 10:00 am </option>
              <option value="11:00"> 11:00 am </option>
            </select>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="add-food-item-button">
              <div id="add-item">Add Item</div>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
