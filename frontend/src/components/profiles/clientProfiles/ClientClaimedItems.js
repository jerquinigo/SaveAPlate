import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import "./clientProfileCSS/ClientClaimedItems.css";

const VendorSection = ({ vendor, userObj, children }) => {
  return (
    <div>
      <div class="display-vendor-name">
        <span class="display-item-name">{vendor.vendor_name}</span>
        <span>{vendor.address_field}</span>
        <span>{vendor.telephone_number}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

const VendorItem = ({ item, userObj, toReRender }) => {
  return (
    <div class="display-claimed-items">
      <span class="display-item-name">{item.name}</span>
      <span>
        <p>Quantity: </p>
        {item.quantity}
      </span>

      <span>
        <p>Pickup Time: </p>
        {item.set_time}
      </span>
      <button
        onClick={e => ClaimItem(e, item.is_claimed, userObj, toReRender)}
        class={item.is_claimed ? "claimed-button" : "unclaimed-button"}
        id={item.id}
      >
        {item.is_claimed ? "UNCLAIM" : "TO CLAIM"}
      </button>
    </div>
  );
};

const ClaimItem = (e, isClaimed, userObj, toReRender) => {
  let target = parseInt(e.target.id);
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
//
// const getAllClaimedFoodItem = props => {
//   axios
//     .get("/api/fooditems/client/")
//     .then(res => {
//       debugger;
//       this.setState({
//         claimedFoodItems: res.data.food_items
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

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
      // console.log("claimed", claimedList);
    }

    console.log("CLAIMED LIST", claimedList);

    return claimedList;
  };

  // claimItem = (e, isClaimed) => {
  //   isClaimed === true
  //     ? axios
  //         .patch(`/api/fooditems/claimstatus/${e.target.id}`, {
  //           client_id: null,
  //           is_claimed: false
  //         })
  //         .then(() => {
  //           this.getfoodItems();
  //         })
  //     : axios
  //         .patch(`/api/fooditems/claimstatus/${e.target.id}`, {
  //           client_id: this.props.currentUser.id,
  //           is_claimed: true
  //         })
  //         .then(() => {
  //           this.getfoodItems();
  //         });
  // };

  render() {
    console.log(this.state.axiosCalledSwitch, "switcher");
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
              />
            );
          })}
        </VendorSection>
      );
    });
    console.log(organizedItems);
    return (
      <div className="clientClaimedItemsPage">
        {vendorArea.map(item => {
          return item;
        })}
      </div>
    );
  }
}

export default withRouter(ClientClaimedItems);
