import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./clientProfileCSS/ClientClaimedItems.css";

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#272E48" },
    secondary: {
      main: "#D35348"
    }
  },
  typography: {
    useNextVariants: true
  }
});

const VendorSection = ({ vendor, userObj, children, getProfilePicture }) => {
  return (
    <div className="display-vendor-name-container">
      <div className="display-vendor-name">
        <div>
          <Link
            to={"/clientview/" + vendor.vendor_name}
            className="display-item-name-client"
          >
            <span>{vendor.vendor_name}</span>{" "}
          </Link>
        </div>
        <div>{vendor.address_field}</div>
        {/* <div>{vendor.telephone_number}</div> */}
        <div>{getProfilePicture}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

const VendorItem = ({ item, userObj, toReRender, receivedOpenSnackbar }) => {
  let converted_time = Number(item.set_time.slice(0, 2));
  return (
    <>
      <div className="display-vendor-items">
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
            {converted_time < 13 && converted_time !== 0
              ? converted_time + "am"
              : converted_time === 0
              ? 12 + "am"
              : converted_time - 12 + "pm"}
          </p>
        </div>

        <div id="item-button-wrapper">
          <MuiThemeProvider theme={theme}>
            <Button
              id={item.id}
              onClick={e => {
                ClaimItem(e, item.is_claimed, userObj, toReRender);
                receivedOpenSnackbar();
              }}
              variant="contained"
              color="secondary"
              className={
                item.is_claimed ? "claimed-button" : "unclaimed-button"
              }
            >
              {item.is_claimed ? "UNCLAIM" : "TO CLAIM"}
            </Button>
          </MuiThemeProvider>
        </div>
        <div id="item-claim-container" />
      </div>
    </>
  );
};

const ClaimItem = (e, isClaimed, userObj, toReRender) => {
  let target = parseInt(e.currentTarget.id);
  isClaimed === true
    ? axios
        .patch(`/api/fooditems/claimstatus/${target}`, {
          client_id: null,
          is_claimed: false
        })
        .then(() => {
          window.globalThis.getAllClaimedFoodItem(userObj.name);
        })
    : axios.patch(`/api/fooditems/claimstatus/${target}`, {
        client_id: userObj.id,
        is_claimed: true
      });
};

class ClientClaimedItems extends Component {
  constructor() {
    super();
    this.state = {
      claimedFoodItems: [],
      newFoodItemsList: [],
      axiosCalledSwitch: false,
      allVendors: []
    };
    window.globalThis = this;
  }

  componentDidMount() {
    this.getAllClaimedFoodItem(this.props.match.params.path);
    this.getAllVendors();
  }

  getAllClaimedFoodItem = () => {
    axios
      .get("/api/fooditems/client/")
      .then(res => {
        this.setState({
          claimedFoodItems: res.data.food_items
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getAllVendors = () => {
    axios.get("/api/users/vendors/").then(foodItems => {
      this.setState({
        allVendors: foodItems.data.vendors
      });
    });
  };

  toReRender = () => {
    this.setState({
      axiosCalledSwitch: !this.state.axiosCalledSwitch
    });
  };

  organizeFoodItems = () => {
    const { claimedFoodItems = [] } = this.state;
    let claimedList = {};

    for (let i = 0; i < claimedFoodItems.length; i++) {
      if (claimedList[claimedFoodItems[i].vendor_id]) {
        claimedList[claimedFoodItems[i].vendor_id].push(claimedFoodItems[i]);
      } else {
        claimedList[claimedFoodItems[i].vendor_id] = [claimedFoodItems[i]];
      }
    }
    return claimedList;
  };

  getProfilePicture = vendorName => {
    let profilePicture = [];
    if (this.state.allVendors) {
      this.state.allVendors.forEach((vendor, i) => {
        vendorName.forEach(name => {
          if (vendor.vendor_name === name.vendor_name) {
            profilePicture.push(vendor.profile_picture);
          }
        });
      });
      return (
        <div className="client-claimed-items-profile-picture-main-div">
          <img
            className="client-claimed-items-profile-pic"
            src={profilePicture[0]}
            alt=""
          />
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    let currUser = this.props.currentUser;
    const organizedItems = this.organizeFoodItems();
    const vendorArea = _.map(organizedItems, (items, i) => {
      return (
        <>
          <VendorSection
            key={i}
            vendor={items[0]}
            userObj={currUser}
            getProfilePicture={this.getProfilePicture(items)}
          >
            <div id="vendor-items-header-client">
              <h4 id="item-name">Food Item </h4>
              <h4 id="weight">Weight </h4>
              <h4 id="feeds">Feeds </h4>
              <h4 id="pick-up">Pick Up Time </h4>
              <div id="spacing" />
            </div>
            {items.map(item => {
              return (
                <VendorItem
                  key={item.id}
                  item={item}
                  userObj={currUser}
                  toReRender={this.toReRender}
                  receivedOpenSnackbar={this.props.receivedOpenSnackbar}
                />
              );
            })}
          </VendorSection>
        </>
      );
    });
    return (
      <div className="client-claimed-items">
        {vendorArea.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
      </div>
    );
  }
}

export default withRouter(ClientClaimedItems);
