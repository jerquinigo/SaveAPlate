
import React, { Component } from "react";
import axios from "axios";
import { getFoodItemsByVendor } from "../../../utils/UtilFoodItems.js";
import AddItemForm from "./AddItemsForm.js";

class VendorProfile extends Component {
  constructor() {
    super();
    this.state = {
      quantity: "",
      name: "",
      set_time: "",
      toAddItem: false,
      claimedItems: [],
      unclaimedItems: []
    };

  }

  componentDidMount() {
    this.vendorDonations();
  }

  ////////////////////////////////////////////////////////////// add food items /////////////////////////////////////////////////////////////////////

  addItemButton = () => {
    return <button onClick={this.toAddItem}> Add Item </button>;
  };


  toAddItem = () => {
    this.setState({
      toAddItem: !this.state.toAddItem
    });
  };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  submitItem = e => {
    e.preventDefault();
    const { quantity, name, set_time } = this.state;
    axios
      .post("/api/fooditems/", {
        quantity: quantity,
        name: name,
        set_time: set_time,
        vendor_id: this.props.currentUser.id
      })
      .then(() => {
        this.vendorDonations();
      });
  };


  /////////////////////////////////////////////////////////////////Get items/////////////////////////////////////////////////////////////
  vendorDonations = () => {
    let tempVar;
    if(this.props.currentUser.type === 2){
      tempVar = this.props.match.params.vendor
    }
    console.log(tempVar);
    getFoodItemsByVendor(!tempVar ? this.props.currentUser.name : tempVar).then(data => {

      let unclaimed = data.data.food_items.filter(item => {
        return item.is_claimed === false;
      });

      this.setState({
        unclaimedItems: unclaimed
      });
      let claimed = data.data.food_items.filter(item => {
        return item.is_claimed === true;
      });
      this.setState({
        claimedItems: claimed
      });
    });
  };

  /////////////////////////////////////////////////////////////DISPLAY ITEMS ///////////////////////////////////////////////////////////////////
  displayUnclaimedItems = () => {
    return this.state.unclaimedItems.map((item, key) => {

      let converted_time = Number(item.set_time.slice(0,2))

      return (
        <div key={item.food_id}>
          <button onClick={this.deleteItem} id={item.food_id}>
            <img
              id={item.food_id}
              src="https://cdn1.iconfinder.com/data/icons/round-ui/123/47-512.png"
              alt=""
              height="25"
              width="25"
            />
          </button>
          <h2> Food Dish </h2>
          <h3>{item.name}</h3>
          <h4> Feeds </h4>
          <h5>{item.quantity}</h5>
          <h4> Lastest Pick Up Time </h4>

          <h5>{converted_time === 0 || converted_time < 13 ? converted_time + "am" : converted_time-12 + "pm"}</h5>
          {item.is_claimed ? (
            <button
              onClick={e => this.claimItem(e, item.is_claimed)}
              id={item.food_id}
            >
              CLAIMED
            </button>
          ) : (
            <button
              onClick={e => this.claimItem(e, item.is_claimed)}
              id={item.food_id}
            >
              UNCLAIMED
            </button>
          )}
        </div>
      );
    });
  };

  displayClaimedItems = () => {
    return this.state.claimedItems.map((item, key) => {
      let converted_time = Number(item.set_time.slice(0,2))

      return (
        <div key={item.food_id}>
          <h3><strong> Food Dish </strong></h3>
          <h4>{item.name}</h4>
          <h3><strong> Feeds </strong></h3>
          <h4>{item.quantity}</h4>
          <h3><strong> Pick Up Time </strong></h3>
          <h4>{converted_time === 0 || converted_time < 13 ? converted_time + "am" : converted_time-12 + "pm"}</h4>
          {item.is_claimed ? (
            <button
              onClick={e => this.claimItem(e, item.is_claimed)}
              id={item.food_id}
            >
              CLAIMED
            </button>
          ) : (
            <button
              onClick={e => this.claimItem(e, item.is_claimed)}
              id={item.food_id}
            >
              UNCLAIMED
            </button>
          )}

        </div>
      );
    });
  };

  //////////////////////////////////////////to claim on vendor page////////////////////////////////////////////////////
  claimItem = (e, isClaimed) => {

    if (this.props.currentUser.type){
    axios.patch(`/api/fooditems/claimstatus/${e.target.id}`, {
      client_id: this.props.currentUser.id,
      is_claimed: !isClaimed
    })
      .then(() => {
        this.vendorDonations()
      })
    }
  }

//////////////////////////////////////////////DELETE ITEMS/////////////////////////////////////////////////////////
  deleteItem = (e) => {
    axios.delete(`/api/fooditems/${e.target.id}`)
      .then(() => {
        this.vendorDonations()
      })
  }


  render() {
    let vendorUser;
    if(this.props.currentUser.type === 2){
      vendorUser = this.props.match.params.vendor
    }
    console.log(this.state)
    return (
      <>
        <div className="VendorProfileWrapper profile">

          <h3> {!vendorUser ? this.props.currentUser.name: vendorUser} </h3>
          {this.state.toAddItem ? (
            <AddItemForm
              handleChange={this.handleChange}
              submitItem={this.submitItem}
            />
          ) : (
            this.addItemButton()
          )}
          <h1><strong><i> Donation List </i></strong> </h1>
          {this.displayUnclaimedItems()}
          <h1><strong><i> Claimed Items </i></strong></h1>
          {this.displayClaimedItems()}
        </div>

      </>
    );
  }
}

export default VendorProfile;
