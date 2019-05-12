import React, { Component } from "react";
import axios from "axios";
import { getFoodItemsByVendor } from "../../../utils/UtilFoodItems.js";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import blue from "@material-ui/core/colors/blue";
import DeleteIcon from "@material-ui/icons/Delete";
import CountUp from "react-countup";
import MainSnackbarContainer from "../../../containers/MainSnackbarContainer.js";
import "./vendorProfilesCSS/VendorProfile.css";
import SimpleModal from "./SimpleModal.js";

class VendorProfile extends Component {
  constructor() {
    super();
    this.state = {
      quantity: "",
      name: "",
      set_time: "",
      toAddItem: false,
      hasAdded: false,
      claimedItems: [],
      unclaimedItems: [],
      fedCount: 0,
      profilePic: "",
      open: false //for modal
    };
  }

  componentDidMount() {
    debugger;
    this.vendorDonations();
    this.getFeedingCount();
    this.getProfilePic();
  }

  getProfilePic = () => {
    debugger;
    axios.get(`/api/users/${this.props.currentUser.id}`).then(pic => {
      this.setState({
        profilePic: pic.data.data[0].profile_picture
      });
    });
  };

  getFeedingCount = () => {
    debugger;
    axios.get("/api/fooditems/feedingcount").then(count => {
      this.setState({
        fedCount: +count.data.fedCount[0].sum * 3
      });
    });
  };

  addItemButton = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          className="add-item-button"
          onClick={() => {
            this.toAddItem();
            this.handleOpen();
          }}
        >
          <div className="add-item-text"> Add Item</div>
        </Button>
      </MuiThemeProvider>
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
    this.setState({
      hasAdded: true
    });
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

  vendorDonations = () => {
    debugger;
    let tempVar;
    if (this.props.currentUser.type === 2) {
      tempVar = this.props.match.params.vendor;
    }
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

  displayUnclaimedItems = () => {
    return this.state.unclaimedItems.map(item => {
      let converted_time = Number(item.set_time.slice(0, 2));
      return (
        <div key={item.food_id} id="display-unclaimed-items">
          <div id="item-name-container">
            <p>{item.name}</p>
          </div>
          <div id="item-weight-container">
            <p>{item.quantity * 3} pounds</p>
          </div>
          <div id="item-feeds-container">
            <p>{item.quantity} people</p>
          </div>
          <div id="item-pickup-container">
            <p>
              {converted_time === 0 || converted_time < 13
                ? converted_time + "am"
                : converted_time - 12 + "pm"}
            </p>
          </div>
          <div id="item-claim-container">
            {item.is_claimed ? (
              <div id="status-unavailable">Unavailable</div>
            ) : (
              <div id="status-available">Available</div>
            )}
          </div>

          <div id="item-button-container">
            <MuiThemeProvider theme={theme}>
              <Button
                onClick={e => {
                  this.deleteItem(e);
                  this.props.receivedOpenSnackbar();
                }}
                type="submit"
                variant="contained"
                color="secondary"
                id={item.food_id}
              >
                <DeleteIcon id={item.food_id} />
              </Button>
            </MuiThemeProvider>
          </div>
        </div>
      );
    });
  };

  displayClaimedItems = () => {
    return this.state.claimedItems.map(item => {
      let converted_time = Number(item.set_time.slice(0, 2));
      return (
        <div key={item.food_id} id="display-unclaimed-items">
          <div id="item-name-container">
            <p>{item.name}</p>
          </div>
          <div id="item-weight-container">
            <p>{item.quantity * 3} pounds</p>
          </div>
          <div id="item-feeds-container">
            <p>{item.quantity} people</p>
          </div>
          <div id="item-pickup-container">
            <p>
              {converted_time === 0 || converted_time < 13
                ? converted_time + "am"
                : converted_time - 12 + "pm"}
            </p>
          </div>
          <div id="item-claim-container">
            {item.is_claimed ? (
              <div id="status-unavailable">Unavailable</div>
            ) : (
              <div id="status-available">Available</div>
            )}
          </div>

          <div id="item-button-container">
            <MuiThemeProvider theme={theme}>
              <Button
                onClick={e => {
                  this.deleteItem(e);
                  this.props.receivedOpenSnackbar();
                }}
                type="submit"
                variant="contained"
                color="secondary"
                id={item.food_id}
              >
                <DeleteIcon id={item.food_id} />
              </Button>
            </MuiThemeProvider>
          </div>
        </div>
      );
    });
  };

  deleteItem = e => {
    axios
      .delete(`/api/fooditems/${e.currentTarget.id}`)
      .then(() => {
        this.vendorDonations();
      })
      .then(() => {
        this.getFeedingCount();
      });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, toAddItem: !this.state.toAddItem });
  };

  foodItemsHeader = () => {
    return (
      <div id="vendor-items-header-vendor">
        <h4 id="item-name">Food Item </h4>
        <h4 id="weight">Weight </h4>
        <h4 id="feeds">Feeds </h4>
        <h4 id="pick-up">Pick Up Time </h4>
        <div id="spacing" />
      </div>
    );
  };

  render() {
    let vendorUser;
    if (this.props.currentUser.type === 2) {
      vendorUser = this.props.match.params.vendor;
    }
    return (
      <div id="vendor-container">
        <MainSnackbarContainer />
        <div id="vendor-profile-container">
          <div>
            <img
              id="profile-picture"
              alt="profile pic"
              src={this.state.profilePic}
            />
          </div>
          <h1 id="vendor-name">
            {" "}
            {!vendorUser ? this.props.currentUser.name : vendorUser}{" "}
          </h1>
          <div className="vendor-info-display">
            <p>
              {" "}
              {!vendorUser
                ? this.props.currentUser.address_field
                : vendorUser}{" "}
            </p>
            <p> {!vendorUser ? this.props.currentUser.email : vendorUser} </p>
          </div>
          <h3 id="vendor-people-fed">
            <div id="vendor-people-fed-count">
              <CountUp duration={5} delay={3} end={this.state.fedCount} />
            </div>
            pounds of food donated
          </h3>
          {this.state.toAddItem ? (
            <SimpleModal
              handleClose={this.handleClose}
              handleOpen={this.handleOpen}
              open={this.state.open}
              handleChange={this.handleChange}
              submitItem={this.submitItem}
              receivedOpenSnackbar={this.props.receivedOpenSnackbar}
            />
          ) : (
            this.addItemButton()
          )}
          <br />
        </div>
        <div id="vendor-info-container">
          <div>
            <h1 id="donation-list-vendor">Donation List</h1>
            <div id="display-unclaimed-items-container">
              {this.foodItemsHeader()}
              {this.displayUnclaimedItems()}
            </div>
          </div>
          <div>
            <h1 id="claimed-items-list-vendor">Claimed Items</h1>
            {this.foodItemsHeader()}
            {this.displayClaimedItems()}
          </div>
        </div>
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#272E48" },
    secondary: {
      main: "#D35348"
    }
  }
});

export default VendorProfile;
