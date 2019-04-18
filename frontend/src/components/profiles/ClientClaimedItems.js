import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ClientClaimedItemsList } from "./ClientClaimedItemsList.js";

class ClientClaimedItems extends Component {
  constructor() {
    super();
    this.state = {
      claimedFoodItems: null,
      newFoodItemsList: []
    };
  }

  componentDidMount() {
    // this.getAllClaimedFoodItem(this.props.match.params.path);
    this.combineAxiosCallAndDisplay();
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

  combineAxiosCallAndDisplay = async () => {
    console.log(this.props.match);
    await this.getAllClaimedFoodItem(this.props.match.params.path);

    await this.displayClaimedFoodItems();
  };

  displayClaimedFoodItems = () => {
    if (!this.state.claimedFoodItems) return null;
    let food = this.state.claimedFoodItems;
    let vendorsToItemsMap = {};
    let vendorValues;
    let vendorKeys;
    let uniqueFoodName = {};
    let clientClaimedItemsList = [];

    food.forEach(item => {
      if (!vendorsToItemsMap[item.vendor_name]) {
        vendorsToItemsMap[item.vendor_name] = [item];
      } else {
        vendorsToItemsMap[item.vendor_name].push(item);
      }
    });

    for (let vendor in vendorsToItemsMap) {
      let items = vendorsToItemsMap[vendor];
      console.log(items, "ITEMS");
      clientClaimedItemsList.push(<ClientClaimedItems name={items.name} />);
    }

    // return clientClaimedItemsList;

    // console.log(vendorsToItemsMap, "our obj to work with ");
    // vendorValues = Object.values(vendorsToItemsMap);
    // vendorKeys = Object.keys(vendorsToItemsMap);
    // for (let vendorsObj in vendorsToItemsMap) {
    //   for (let i = 0; i <= vendorKeys.length; i++) {
    //     debugger;
    //     if (vendorKeys[i] === vendorsObj) {
    //       for (let j = 0; j < vendorValues.length; j++) {
    //         // console.log(vendorValues[j][j].name);
    //         uniqueFoodName[vendorValues[j][j].name] = vendorValues[j][j].name;
    //       }
    //       let finalItems = Object.values(uniqueFoodName);

    //       let array = finalItems.map(item => {
    //         return (
    //           <div>
    //             <p>{item}</p>
    //           </div>
    //         );
    //       });
    //       debugger;
    //       return array;
    //     }
    //   }
    // }

    // console.log(uniqueFoodName, "to see");

    // console.log(uniqueFoodName);
  };

  render() {
    console.log(this.state.claimedFoodItems, "CLAIMED FOOD ITEMS");
    return (
      <div className="clientClaimedItemsPage">
        {this.displayClaimedFoodItems()}
      </div>
    );
  }
}

export default withRouter(ClientClaimedItems);
