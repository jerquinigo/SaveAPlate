import React, { Component } from "react";
import axios from "axios";

class ClientClaimedItems extends Component {
  constructor() {
    super();
    this.state = {
      claimedFoodItems: ""
    };
  }

  componentDidMount() {
    this.getClaimedFoodItemsByClient();
  }

  getClaimedFoodItemsByClient = () => {
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

  displayClaimedFoodItems = () => {
    this.state.claimedFoodItems.map(foodItem => {
      return (
        <>
          <div>Address{foodItem.address_field}</div>
          <div>Telephone{foodItem.telephone_number}</div>
          <div>Telephone{foodItem.telephone_number}</div>
        </>
      );
    });
  };

  render() {
    console.log(this.state);
    return <div className="clientClaimedItemsPage" />;
  }
}

export default ClientClaimedItems;
