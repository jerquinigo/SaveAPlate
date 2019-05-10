import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import "./clientProfileCSS/ClientClaimedItems.css";

const VendorSection = ({ vendor, userObj, children }) => {
  return (
    <div className="display-vendor-name-container">
      <div className="display-vendor-name">
        <div>
          <Link to={"/clientview/" + vendor.vendor_name}>
            <span className="display-item-name">{vendor.vendor_name}</span>{" "}
          </Link>
        </div>
        <div>{vendor.address_field}</div>
        <div>{vendor.telephone_number}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

const VendorItem = ({ item, userObj, toReRender, receivedOpenSnackbar }) => {
  let converted_time = Number(item.set_time.slice(0, 2));
  return (
    <div className="display-claimed-items">
      <div id="item-name-container">
        <h4 id="item-name">Food Item:</h4>
        <p>{item.name}</p>
      </div>
      <div id="item-weight-container">
        <h4 id="weight">Weight: </h4>
        <p>{item.quantity * 3} pounds</p>
      </div>
      <div id="item-feeds-container">
        <h4 id="feeds">Feeds: </h4>
        <p>{item.quantity} people</p>
      </div>
      <div id="item-pickup-container">
        <h4 id="pick-up">Pick Up Time: </h4>
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
        <Button
          id={item.id}
          onClick={e => {
            ClaimItem(e, item.is_claimed, userObj, toReRender);
            receivedOpenSnackbar();
          }}
          variant="contained"
          color="secondary"
          className={item.is_claimed ? "claimed-button" : "unclaimed-button"}>
          {item.is_claimed ? "UNCLAIM" : "TO CLAIM"}
        </Button>
      </div>
    </div>
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
      axiosCalledSwitch: false
    };
    window.globalThis = this;
  }

  componentDidMount() {
    this.getAllClaimedFoodItem(this.props.match.params.path);
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

    console.log("CLAIMED LIST", claimedList);

    return claimedList;
  };

  render() {
    let currUser = this.props.currentUser;
    const organizedItems = this.organizeFoodItems();
    const vendorArea = _.map(organizedItems, (items, i) => {
      return (
        <VendorSection key={i} vendor={items[0]} userObj={currUser}>
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
      );
    });
    return (
      <div className="clientClaimedItemsPage">
        Booked Items
        {vendorArea.map(item => {
          return item;
        })}
      </div>
    );
  }
}

export default withRouter(ClientClaimedItems);
