import React, { Component } from "react";
import "./feedCSS/Feed.css";
import axios from "axios";
import SearchBar from "./SearchBar.js"
import { Link } from "react-router-dom"

export default class Feed extends Component {
  state = {
    // foodItems: [],
    allFoodItems: [],
    userSearchResults: [],
    textInput: ""
    // clientID: 1,
    // vendorID: 1
  };

  componentDidMount() {
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
  //
  // getFoodItemsForVendor = () => {
  //   axios
  //     .get(`/api/fooditems/vendor/${this.state.vendorID}`)
  //     .then(foodItems => {
  //       this.setState({
  //         foodItems: foodItems.data.food_items
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
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

  claimItem = (e, isClaimed) => {
    if (this.props.currentUser.type){
    axios.patch(`/api/fooditems/claimstatus/${e.target.id}`, {
      client_id: this.props.currentUser.id,
      is_claimed: !isClaimed
    })
      .then(() => {
        this.getAllFoodItems()
      })
    }
  }

  handleSubmit = async (e) => {
  e.preventDefault()
  let searchResult = this.state.allFoodItems.filter(item => {

    let vendor = item.vendor_name.toLowerCase()
    let food = item.name.toLowerCase()

    let text = this.state.textInput.toLowerCase()
    console.log(vendor, "vendor", food, "food", text, "input");
    return vendor.includes(text) || food.includes(text)
  })

    await this.setState({
      userSearchResults: searchResult, textInput: ""
    })
  }

  handleChange = (e) => {
      let searchResult = this.state.allFoodItems.filter(item => {
        return (item.vendor_name.toLowerCase() === this.state.textInput.toLowerCase() || item.name.toLowerCase() === this.state.textInput.toLowerCase() )
      }
    )
      this.setState({
        textInput: e.target.value,
        userSearchResults: searchResult
      })
    }

  render() {

    let userSearchResultsMapped;
    let allFoodItemsMapped;

  if (this.state.userSearchResults.length > 0) {

    userSearchResultsMapped = this.state.userSearchResults.map((results, i) => {

      let converted_time = Number(results.set_time.slice(0,2));
        return (
          <ul key={i}>
          <li>
          <Link to = {"/vendor/" + results.vendor_name}>  <strong>Name: </strong>
            {results.vendor_name}
            </Link>
          </li>

          <li>
            <strong>Address: </strong>
            {results.address_field}
          </li>
          <li>
            <strong>Telephone Number: </strong>
            {results.telephone_number}
          </li>
          <li>
            <strong>Food Item: </strong>
            {results.name}
          </li>
          <li>
            <strong>Feeds: </strong>
            {results.quantity} people
          </li>
          <li>
            <strong>Pick-up Time: </strong> {converted_time === 0 || converted_time < 13 ? converted_time + "am" : converted_time-12 + "pm"}
          </li>
          <li>
              {results.is_claimed ? <button className={results.is_claimed ? "claimed" : "unclaimed"} onClick={(e)=> this.claimItem(e, results.is_claimed)} id={results.id}>CLAIMED</button> : <button onClick={(e)=> this.claimItem(e, results.is_claimed)} id={results.id}>UNCLAIMED</button>}
          </li>
        </ul>)
      }
    )
  } else {
    if (this.state.allFoodItems) {
      allFoodItemsMapped = this.state.allFoodItems.map((food, i) => {
        let converted_time = Number(food.set_time.slice(0,2))

        if (food.is_claimed === false) {
          return(
            <ul key={i}>
              <li>
                <Link to = {"/vendor/" + food.vendor_name}> <strong>Name: </strong>
                {food.vendor_name}
                </Link>
              </li>
              <li>
                <strong>Address: </strong>
                {food.address_field}
              </li>
              <li>
                <strong>Telephone Number: </strong>
                {food.telephone_number}
              </li>
              <li>
                <strong>Food Item: </strong>
                {food.name}
              </li>
              <li>
                <strong>Feeds: </strong>
                {food.quantity} people
              </li>
              <li>
                <strong>Pick-up Time: </strong> {converted_time === 0 || converted_time < 13 ? converted_time + "am" : converted_time-12 + "pm"}
              </li>
              <li>
                  {food.is_claimed ? <button className={food.is_claimed ? "claimed" : "unclaimed"} onClick={(e)=> this.claimItem(e, food.is_claimed)} id={food.id}>CLAIMED</button> : <button onClick={(e)=> this.claimItem(e, food.is_claimed)} id={food.id}>UNCLAIMED</button>}
              </li>
            </ul>
          )
          } else {
          return null
        }
    })
  }
}

    return (
      <>
        <SearchBar allFoodItems={this.state.allFoodItems} userSearchResults={this.state.userSearchResults} handleSubmit={this.handleSubmit} textInput={this.state.textInput} handleChange={this.handleChange}/>
        { userSearchResultsMapped ? userSearchResultsMapped : null}
        {allFoodItemsMapped ? allFoodItemsMapped : null}
      </>
    )
  }
}
