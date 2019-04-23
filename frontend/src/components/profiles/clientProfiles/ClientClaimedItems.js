import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import _ from "lodash";

const VendorSection = ({ vendor, children }) => {
  return (
    <div>
      <div>
        <span>{vendor.vendor_name}</span>
        <span>{vendor.address_field}</span>
        <span>{vendor.telephone_number}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

const VendorItem = ({ item }) => {
  return (
    <div>
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <span>{item.set_time}</span>
    </div>
  );
};

class ClientClaimedItems extends Component {
  constructor() {
    super();
    this.state = {
      claimedFoodItems: [],
      newFoodItemsList: []
    };
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

  render() {
    // console.log(this.state.claimedFoodItems, "CLAIMED FOOD ITEMS");
    const organizedItems = this.organizeFoodItems();
    const vendorArea = _.map(organizedItems, (items, i) => {
      return (
        <VendorSection key={i} vendor={items[0]}>
          {items.map(item => (
            <VendorItem key={item.id} item={item} />
          ))}
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
