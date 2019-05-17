import React, { Component } from "react";
import axios from "axios";
import { getFoodItemsByVendor } from "../../../utils/UtilFoodItems.js";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CountUp from "react-countup";
import MainSnackbarContainer from "../../../containers/MainSnackbarContainer.js";
import SimpleModal from "./SimpleModal.js";
import "./vendorProfilesCSS/VendorProfile.css";

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#008000" },
    secondary: {
      main: "#D35348"
    }
  },
  typography: {
    useNextVariants: true
  }
});

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
      phoneNumber: "",
      body: "",
      open: false //for modal
    };
  }

  componentDidMount() {
    this.vendorDonations();
    this.getFeedingCount();
    this.getProfileInfo();
  }

  getProfileInfo = () => {
    axios.get(`/api/users/${this.props.currentUser.id}`).then(info => {
      this.setState({
        profilePic: info.data.data[0].profile_picture,
        phoneNumber: info.data.data[0].telephone_number,
        body: info.data.data[0].body
      });
    });
  };

  getFeedingCount = () => {
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
        <div
          key={item.food_id}
          className="vendor-profile-container-vendor-version"
        >
          <div className="claimed-vendor-items-two">
            <p className="vendor-page-item-name">{item.name}</p>
            <p className="vendor-page-item-pounds">
              {item.quantity * 3} pounds
            </p>
            <p className="vendor-page-item-quantity">{item.quantity} people</p>
            <p className="vendor-page-pickup-time">
              {converted_time < 13 && converted_time !== 0
                ? converted_time + "am"
                : converted_time === 0
                ? 12 + "am"
                : converted_time - 12 + "pm"}
            </p>
            <div className="vendor-page-delete-icon">
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
        </div>
      );
    });
  };

  displayClaimedItems = () => {
    return this.state.claimedItems.map(item => {
      let converted_time = Number(item.set_time.slice(0, 2));
      return (
        <div
          key={item.food_id}
          className="vendor-profile-container-vendor-version"
        >
          <div className="claimed-vendor-items-two">
            <p className="vendor-page-item-name">{item.name}</p>

            <p className="vendor-page-item-pounds">
              {item.quantity * 3} pounds
            </p>

            <p className="vendor-page-item-quantity">{item.quantity} people</p>

            <p className="vendor-page-pickup-time">
              {converted_time === 0 || converted_time < 13
                ? converted_time + "am"
                : converted_time - 12 + "pm"}
            </p>
            <div className="vendor-page-delete-icon">
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
      <div class="vendor-items-list-header-vendor-view-through-client">
        <p className="vendor-profile-thru-client-item-name-for-client">
          Food Item{" "}
        </p>
        <p className="vendor-profile-thru-client-weight-for-client">Weight </p>
        <p className="vendor-profile-thru-client-feeds-for-client">Feeds </p>
        <p className="vendor-profile-thru-client-pick-up-for-client">
          Pick Up Time{" "}
        </p>
        <div className="vendor-profile-thru-spacing" />
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
        <div className="main-div-displaying-detail-vendor-view-through-profile">
          <div className="profile-picture-container-div">
            <img
              className="profile-picture-through-client-page"
              alt="profile pic"
              src={this.state.profilePic}
            />
          </div>
          <div className="vendorNameDiv">
            <h2 className="vendor-name">
              {!vendorUser ? this.props.currentUser.name : vendorUser}{" "}
            </h2>
          </div>
          <h3 id="vendor-people-fed">
            <div id="vendor-people-fed-count">
              <CountUp duration={5} delay={3} end={this.state.fedCount} />
            </div>
            pounds of food donated
          </h3>
          <div className="modalContainer">
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
          </div>
          <div className="contactUsDiv">
            <h3> Contact Us </h3>
            <p className="vendorDeets">
              <span className="addressSpan">
                {!vendorUser
                  ? this.props.currentUser.address_field
                  : vendorUser}
              </span>{" "}
              <br />
              <span className="emailSpan">
                {!vendorUser ? this.props.currentUser.email : vendorUser}{" "}
              </span>{" "}
              <br />
              <span className="phoneSpan">{this.state.phoneNumber}</span> <br />
            </p>
          </div>
          <div className="vendorBioContainer">
            <h3> Description </h3>
            <p className="vendorBio"> {this.state.body}</p>
          </div>
        </div>
        <div id="vendor-info-container">
          <div className="donationsContainer">
            <div className="display-donations-list-name">
              <h3 class="donation-list-text"> Donation List </h3>
            </div>
            {this.foodItemsHeader()}
            {this.displayUnclaimedItems()}
          </div>
          <div className="claimedListContainer">
            <div className="display-donations-list-name">
              <h3 className="donation-list-text"> Claimed Items </h3>
            </div>
            {this.foodItemsHeader()}
            {this.displayClaimedItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default VendorProfile;
