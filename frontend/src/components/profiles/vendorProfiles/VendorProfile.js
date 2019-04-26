import React, { Component } from "react";
import axios from "axios";
import { getFoodItemsByVendor } from "../../../utils/UtilFoodItems.js";
import AddItemForm from "./AddItemsForm.js";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import "./vendorProfilesCSS/VendorProfile.css";

class VendorProfile extends Component {
  constructor() {
    super();
    this.state = {
      quantity: "",
      name: "",
      set_time: "",
      toAddItem: false,
      claimedItems: [],
      unclaimedItems: [],
      fedCount: 0
    };
  }

  componentDidMount() {
    this.vendorDonations();
    this.getFeedingCount();
  }

  //get feeding count
  getFeedingCount = () => {
    axios.get("/api/fooditems/feedingcount").then(count => {
      this.setState({
        fedCount: +count.data.fedCount[0].sum * 3
      });
    });
  };

  // Add food items
  addItemButton = () => {
    return (
      <>
        <p className="add-item-text">Add Item</p>
        <Fab
          color="primary"
          aria-label="Add"
          className="add-item-button"
          onClick={this.toAddItem}>
          <AddIcon />
        </Fab>
      </>
    );
  };

  toAddItem = () => {
    this.setState({
      toAddItem: !this.state.toAddItem
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    const { quantity, name, set_time } = this.state;
    axios
      .post("/api/fooditems/", {
        quantity: quantity,
        name: name,
        set_time: set_time,
        vendor_id: this.props.currentUser.id
      })
      .then(() => {
        this.setState({
          toAddItem: false
        });
        this.vendorDonations();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Get items
  vendorDonations = () => {
    let tempVar;
    if (this.props.currentUser.type === 2) {
      tempVar = this.props.match.params.vendor;
    }
    console.log(tempVar, "the temp var");
    getFoodItemsByVendor(!tempVar ? this.props.currentUser.name : tempVar).then(
      data => {
        let unclaimed = data.data.food_items.filter(item => {
          return item.is_claimed === false;
        });

        this.setState({
          unclaimedItems: unclaimed
        });
        let claimed = data.data.food_items.filter(item => {
          return item.is_claimed === true;
        });
        this.setState({
          claimedItems: claimed
        });
      }
    );
  };

  // Display items
  displayUnclaimedItems = () => {
    return this.state.unclaimedItems.map(item => {
      let converted_time = Number(item.set_time.slice(0, 2));
      return (
        <div key={item.food_id} id="display-unclaimed-items">
          <h4 id="item-name">{item.name}</h4>
          <p>{item.quantity} pounds</p>
          <p>Feeds: {item.quantity * 3} people</p>
          <p>
            {" "}
            Lastest Pick Up Time: {""}
            {converted_time === 0 || converted_time < 13
              ? converted_time + "am"
              : converted_time - 12 + "pm"}
          </p>
          <div>
            {item.is_claimed ? (
              <button
                onClick={e => this.claimItem(e, item.is_claimed)}
                id="claimed-button">
                Claimed
              </button>
            ) : (
              <button
                onClick={e => this.claimItem(e, item.is_claimed)}
                id="unclaimed-button">
                Unclaimed
              </button>
            )}
          </div>
          <Button
            onClick={this.deleteItem}
            type="submit"
            variant="contained"
            color="secondary"
            id={item.food_id}>
            <DeleteIcon id={item.food_id} />
          </Button>
        </div>
      );
    });
  };

  displayClaimedItems = () => {
    return this.state.claimedItems.map(item => {
      let converted_time = Number(item.set_time.slice(0, 2));
      return (
        <div key={item.food_id} id="display-claimed-items">
          <h4 id="item-name">{item.name}</h4>
          <p>{item.quantity} pounds</p>
          <p>Feeds: {item.quantity * 3} people</p>
          <p>
            {" "}
            Lastest Pick Up Time: {""}
            {converted_time === 0 || converted_time < 13
              ? converted_time + "am"
              : converted_time - 12 + "pm"}
          </p>
          <div>
            {item.is_claimed ? (
              <button
                onClick={e => this.claimItem(e, item.is_claimed)}
                id="claimed-button">
                Claimed
              </button>
            ) : (
              <button
                onClick={e => this.claimItem(e, item.is_claimed)}
                id="unclaimed-button">
                Unclaimed
              </button>
            )}
          </div>
          <Button
            onClick={this.deleteItem}
            variant="contained"
            color="secondary"
            id={item.food_id}>
            <DeleteIcon onClick={this.deleteItem} id={item.food_id} />
          </Button>
        </div>
      );
    });
  };

  // To claim on vendor page
  claimItem = (e, isClaimed) => {
    if (this.props.currentUser.type) {
      axios
        .patch(`/api/fooditems/claimstatus/${e.target.id}`, {
          client_id: this.props.currentUser.id,
          is_claimed: !isClaimed
        })
        .then(() => {
          this.vendorDonations();
        });
    }
  };

  // Delete items
  deleteItem = e => {
    axios
      .delete(`/api/fooditems/${e.target.id}`)
      .then(() => {
        this.vendorDonations();
      })
      .then(() => {
        this.getFeedingCount();
      });
  };

  // Favorite vendor
  render() {
    console.log(this.state.fedCount, "FEEEDING");
    let vendorUser;
    if (this.props.currentUser.type === 2) {
      vendorUser = this.props.match.params.vendor;
    }
    console.log(this.state);
    return (
      <div className="vendor-profile-container">
        <h1 className="vendor-name">
          {" "}
          {!vendorUser ? this.props.currentUser.name : vendorUser}{" "}
        </h1>
        <br />
        <div id="vendor-people-fed">
          <h2>Number of people fed:</h2>
          <h3>{this.state.fedCount}</h3>
        </div>
        <br />
        <br />
        {this.state.toAddItem ? (
          <AddItemForm
            handleChange={this.handleChange}
            submitItem={this.submitItem}
          />
        ) : (
          this.addItemButton()
        )}
        <br />
        <div>
          <h1 id="donation-list">Donation List</h1>
          <div id="display-unclaimed-items-container">
            {this.displayUnclaimedItems()}
          </div>
        </div>
        <div>
          <h1 id="claimed-items-list">Claimed Items</h1>
          {this.displayClaimedItems()}
        </div>
      </div>
    );
  }
}

export default VendorProfile;
