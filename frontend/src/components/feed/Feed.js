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
            <h1>Client #1 - Food Item(s):</h1>
            {this.state.foodItems.map((food, i) => {
              return (
                <ul key={i}>
                  <h3>Item: {i + 1}</h3>
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
                </ul>
              );
            })}
          </div>
        ) : null}
      </>
    );
  }
}
