import React, { Component } from "react";
import "./feedCSS/Feed.css";
import axios from "axios";
import SearchBar from "./SearchBar.js";
import AllFeedItems from "./AllFeedItems.js";
import { SearchBarResults } from "./SearchBarResults.js";
import "./feedCSS/Feed.css";
import MainSnackbarContainer from "../../containers/MainSnackbarContainer.js";

export default class Feed extends Component {
  state = {
    allFoodItems: [],
    textInput: "",
    searchText: "",
    allVendors: [],
    fadeTrigger: []
  };

  componentDidMount() {
    this.getAllFoodItems();
    this.getAllVendors();
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

  getAllVendors = () => {
    axios.get("/api/users/vendors/").then(foodItems => {
      this.setState({
        allVendors: foodItems.data.vendors
      });
    });
  };

  claimItem = (e, isClaimed, food_id) => {
    let targetId;
    if (!!e.currentTarget.id) {
      targetId = e.currentTarget.id;
    }
    if (isClaimed === false) {
      //we grab the id we claim saving it to an array in state => if array includes the id we append the class fade-out...
      this.setState({
        fadeTrigger: [...this.state.fadeTrigger, food_id]
      });
      //we then want it to be claimed but not have it immediately disappear showing the fadeout effect first and so we add a set timeout that after 1s does an axios call and gets all elements again
      setTimeout(
        targetId => {
          this.fireClaimingItem(targetId);
        },
        1100,
        targetId
      );
    } else {
      axios
        .patch(`/api/fooditems/claimstatus/${targetId}`, {
          client_id: null,
          is_claimed: false
        })
        .then(() => {
          this.getAllFoodItems();
        });
    }
  };

  fireClaimingItem = targetId => {
    axios
      .patch(`/api/fooditems/claimstatus/${targetId}`, {
        client_id: this.props.currentUser.id,
        is_claimed: true
      })
      .then(() => {
        this.getAllFoodItems();
      });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // let searchResult = this.state.allFoodItems.filter(item => {
    //   let vendor = item.vendor_name.toLowerCase();
    //   let food = item.name.toLowerCase();
    //   let text = this.state.textInput.toLowerCase();
    //   let claimed = item.is_claimed;
    //
    //   return (vendor.includes(text) && claimed !== true) || food.includes(text);
    // });
    // const searchResults = this.search(
    //   this.state.allFoodItems,
    //   this.state.textInput.toLowerCase()
    // );
    await this.setState({
      searchText: this.state.textInput.toLowerCase(),
      textInput: ""
    });
  };
  search = (allFoodItems, searchText) => {
    //if search text is blank, return empty arr for length
    if (this.state.searchText === "") return [];

    let searchResult = allFoodItems.filter(item => {
      let vendor = item.vendor_name.toLowerCase();
      let food = item.name.toLowerCase();
      let claimed = item.is_claimed;

      return (
        (vendor.includes(searchText) && claimed !== true) ||
        food.includes(searchText)
      );
    });
    return searchResult;
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
    const filteredFoodItems = this.search(
      this.state.allFoodItems,
      this.state.searchText
    );
    return (
      <div className="feedWrapper">
        <MainSnackbarContainer />
        <div id="feed">Donation List</div>
        <SearchBar
          allFoodItems={this.state.allFoodItems}
          userSearchResults={this.state.userSearchResults}
          handleSubmit={this.handleSubmit}
          textInput={this.state.textInput}
          handleChange={this.handleChange}
          receivedOpenSnackbar={this.props.receivedOpenSnackbar}
        />
        {filteredFoodItems.length > 0 ? (
          <SearchBarResults
            claimItem={this.claimItem}
            userSearchResults={filteredFoodItems}
            currentUser={this.props.currentUser.type}
            getAllFoodItems={this.getAllFoodItems}
            foodItems={this.state.getAllFoodItems}
            receivedOpenSnackbar={this.props.receivedOpenSnackbar}
            allVendors={this.state.allVendors}
          />
        ) : (
          <AllFeedItems
            claimItem={this.claimItem}
            allFoodItems={this.state.allFoodItems}
            userSearchResults={this.state.userSearchResults}
            receivedOpenSnackbar={this.props.receivedOpenSnackbar}
            allVendors={this.state.allVendors}
            fadeTrigger={this.state.fadeTrigger}
          />
        )}
      </div>
    );
  }
}
