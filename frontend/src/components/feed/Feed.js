import React, { Component } from "react";
import "./feedCSS/Feed.css";
import axios from "axios";

export default class Feed extends Component {
  state = {
    foodItems: []
  };

  componentDidMount() {
    this.getFoodItemsForClient();
  }

  getFoodItemsForClient = () => {
    axios.get("/api/fooditems/client/1").then(foodItems => {
      this.setState({
        foodItems: foodItems.data.food_items
      });
    });
  };
  // at the moment, this function will only display foodItems for client #1 since "1" is hard-coded. will be updated

  render() {
    console.log(this.state.foodItems);

    return (
      <>
        {this.state.foodItems ? (
          <div id="feed-container">
            <ul>Client #1 - Food Item(s):</ul>
            {this.state.foodItems.map((food, i) => {
              return <li key={i}>{food.name}</li>;
            })}
          </div>
        ) : null}
      </>
    );
  }
}
