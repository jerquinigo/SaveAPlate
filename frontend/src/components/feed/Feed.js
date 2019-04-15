import React, { Component } from "react";
import "./feedCSS/Feed.css";
import axios from "axios";

export default class Feed extends Component {
  state = {
    foodItems: [],
    allFoodItems: [],
    // clientID: 1,
    vendorID: 1
  };

  componentDidMount() {
    // this.getFoodItemsForClient();
    this.getFoodItemsForVendor();
    this.getAllFoodItems();
  }

  //   getFoodItemsForClient = () => {
  //     axios
  //       .get(`/api/fooditems/client/${this.state.clientID}`)
  //       .then(foodItems => {
  //         this.setState({
  //           foodItems: foodItems.data.food_items
  //         });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   // at the moment, this function will only display foodItems for client #1 since "1" is hard-coded. will be updated

  getFoodItemsForVendor = () => {
    axios
      .get(`/api/fooditems/vendor/${this.state.vendorID}`)
      .then(foodItems => {
        this.setState({
          foodItems: foodItems.data.food_items
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // at the moment, this function will only display foodItems for vendor #1 since "1" is hard-coded. will be updated

  getAllFoodItems = () => {
    axios
      .get("/api/foodItems")
      .then(foodItems => {
        this.setState({
          allFoodItems: foodItems.data.food_items
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.foodItems);

    return (
      <>
        {this.state.allFoodItems ? (
          <div id="feed-container">
            <h1>Client #1 - Food Item(s):</h1>
            {this.state.allFoodItems.map((food, i) => {
              return (
                <ul key={i}>
                  <h3>Item #: {i + 1}</h3>
                  <li>
                    <strong>Name: </strong>
                    {food.name}
                  </li>
                  <li>
                    <strong>Feeds: </strong>
                    {food.quantity}
                  </li>
                  <li>
                    <strong>Pick-up Time: </strong> {food.set_time}
                  </li>
                  <li>
                    <button
                      className={food.is_claimed ? "claimed" : "unclaimed"}>
                      {food.is_claimed ? "Claimed" : "Unclaimed"}
                    </button>
                    {/* this button will not actually do anything, for now, except display the claim status */}
                  </li>
                </ul>
              );
            })}
          </div>
        ) : null}
      </>
    );
  }
}
