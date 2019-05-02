import React, { Component } from "react";
import "./feedCSS/Feed.css";
import axios from "axios";
import SearchBar from "./SearchBar.js";
import AllFeedItems from "./AllFeedItems.js";
import SearchBarResults from "./SearchBarResults.js";

export default class Feed extends Component {
  state = {
    allFoodItems: [],
    userSearchResults: [],
    textInput: ""
  };

  componentDidMount() {
    this.getAllFoodItems();
  }

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

  claimItem = (e, isClaimed) => {
    if (isClaimed === false) {
      debugger;
      axios
        .patch(`/api/fooditems/claimstatus/${e.target.id}`, {
          client_id: this.props.currentUser.id,
          is_claimed: true
        })
        .then(() => {
          this.getAllFoodItems();
        });
    } else {
      axios
        .patch(`/api/fooditems/claimstatus/${e.target.id}`, {
          client_id: null,
          is_claimed: false
        })
        .then(() => {
          this.getAllFoodItems();
        });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    let searchResult = this.state.allFoodItems.filter(item => {
      let vendor = item.vendor_name.toLowerCase();
      let food = item.name.toLowerCase();
      let text = this.state.textInput.toLowerCase();
      let claimed = item.is_claimed;

      return (vendor.includes(text) && claimed !== true) || food.includes(text);
    });

    await this.setState({
      userSearchResults: searchResult,
      textInput: ""
    });
  };

  handleChange = e => {
    let searchResult = this.state.allFoodItems.filter(item => {
      return (
        item.vendor_name.toLowerCase() === this.state.textInput.toLowerCase() ||
        item.name.toLowerCase() === this.state.textInput.toLowerCase()
      );
    });
    this.setState({
      textInput: e.target.value,
      userSearchResults: searchResult
    });
  };

  render() {
    console.log(this.state.userSearchResults, "in the length");
    return (
      <div>
        <SearchBar
          allFoodItems={this.state.allFoodItems}
          userSearchResults={this.state.userSearchResults}
          handleSubmit={this.handleSubmit}
          textInput={this.state.textInput}
          handleChange={this.handleChange}
        />

        {this.state.userSearchResults.length > 0 ? (
          <SearchBarResults
            claimItem={this.claimItem}
            userSearchResults={this.state.userSearchResults}
            currentUser={this.props.currentUser.type}
          />
        ) : (
          <AllFeedItems
            claimItem={this.claimItem}
            allFoodItems={this.state.allFoodItems}
            userSearchResults={this.state.userSearchResults}
          />
        )}
      </div>
    );
  }
}

// {this.state.userSearchResults.length > 0 ? (
//   <SearchBarResults
//     claimItem={this.claimItem}
//     userSearchResults={this.state.userSearchResults}
//   />
// ) : (
// <AllFeedItems
//   claimItem={this.claimItem}
//   allFoodItems={this.state.allFoodItems}
//   userSearchResults={this.state.userSearchResults}
// />
// )}
