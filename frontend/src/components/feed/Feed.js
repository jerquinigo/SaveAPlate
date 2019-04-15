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

  render() {
    console.log(this.state);
    return <div id="feed-container" />;
  }
}
