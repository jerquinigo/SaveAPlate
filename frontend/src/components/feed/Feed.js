import React, { Component } from "react";
import "./feedCSS/Feed.css";
import axios from "axios";

export default class Feed extends Component {
  state = {
    // foodItems: [],
    allFoodItems: []
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

  render() {
    return (
      <>
        {this.state.allFoodItems ? (
          <div id="feed-container">
            <h1>All Food Items:</h1>
            {this.state.allFoodItems.map((food, i) => {
              let converted_time = Number(food.set_time.slice(0,2))
              return ((food.is_claimed === false) ?
                (
                <ul key={i}>
                  <li>
                    <strong>Name: </strong>
                    {food.vendor_name}
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
              ) : null )
            }
          )
        }
          </div>
        ) : null}
      </>
    );
  }
}
