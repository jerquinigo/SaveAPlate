import React, { Component } from "react";
import axios from "axios";
import { getFoodItemsByVendor } from "../../../utils/UtilFoodItems.js";

class VendorProfileThruClient extends Component {
  constructor() {
    super();
    this.state = {
      businessHours: [],
      foodInfo: [],
      allFavsForVendor: [],
      isFav: []
    };
  }

  componentDidMount = async () => {
    await this.getBusinessHours();
    this.getfoodItems();
    this.getFavs();
  };
  /////////////////////////////////////GET INFORMATION/////////////////////////////////////
  //////////////////////////////////////get business hours/////////////////////////////////
  getBusinessHours = () => {
    axios
      .get(`/api/business_hours/${this.props.match.params.vendor}`)
      .then(info => {
        this.setState({
          businessHours: info.data.data
        });
      });
  };
  /////////////////////////////////////get food items////////////////////////////////////////////////////////////////////////
  getfoodItems = () => {
    getFoodItemsByVendor(this.props.match.params.vendor).then(items => {
      this.setState({
        foodInfo: items.data.food_items
      });
    });
  };

  ///////////////////////////////////////get Favs//////////////////////////////////////////////////////////////////////////////
  getFavs = () => {
    axios
      .get(
        `/api/favorites/${this.props.match.params.vendor
          .split("%20")
          .join(" ")}`
      )
      .then(data => {
        this.setState({
          allFavsForVendor: data.data.favorites
        });
      })
      .then(() => {
        this.isFav();
      });
  };
  //////////////////////////////////favorite vendor/////////////////////////////////////////////////////////////////////
  isFav = () => {
    let results = this.state.allFavsForVendor.filter(fav => {
      let answer = !!this.state.businessHours.length
        ? this.state.businessHours[0].vendor_id
        : 0;
      return (
        fav.vendor_id === answer && fav.client_id === this.props.currentUser.id
      );
    });

    this.setState({
      isFav: results
    });
  };

  addFav = async () => {
    await axios.post("/api/favorites/", {
      client_id: this.props.currentUser.id,
      vendor_id: this.state.businessHours[0].vendor_id
    });
    await this.getFavs();
  };

  deleteFav = async () => {
    await axios.delete(`/api/favorites/${this.state.isFav[0].id}`);

    await this.getFavs();
  };

  //////////////////////////////////////////DISPLAY ITEMS/////////////////////////////////////////////////////////////////////////////
  displayItems = () => {
    return this.state.foodInfo.map(item => {
      let converted_time = Number(item.set_time.slice(0, 2));
      return (
        <div key={item.food_id}>
          <h2>{item.vendor_name} </h2>
          <h2>{item.vendor_address} </h2>
          <h2> {item.telephone_number}</h2>
          <h2> Food Dish </h2>
          <h3>{item.name}</h3>
          <h4> Feeds </h4>
          <h5>{item.quantity}</h5>
          <h4> Lastest Pick Up Time </h4>

          <h5>
            {converted_time === 0 || converted_time < 13
              ? converted_time + "am"
              : converted_time - 12 + "pm"}
          </h5>
          {item.is_claimed ? (
            <button
              onClick={e => this.claimItem(e, item.is_claimed)}
              id={item.food_id}
            >
              UNCLAIM
            </button>
          ) : (
            <button
              onClick={e => this.claimItem(e, item.is_claimed)}
              id={item.food_id}
            >
              TO CLAIM
            </button>
          )}
        </div>
      );
    });
  };
  //////////////////////////////////////////////////////DISPLAY HOURS///////////////////////////////////////
  displayBusinessHours = () => {
    return this.state.businessHours.map(time => {
      let mon1 = Number(time.mon_start.slice(0, 2));
      let mon2 = Number(time.mon_end.slice(0, 2));
      let tue1 = Number(time.tues_start.slice(0, 2));
      let tue2 = Number(time.tues_end.slice(0, 2));
      let wed1 = Number(time.wed_start.slice(0, 2));
      let wed2 = Number(time.wed_end.slice(0, 2));
      let thu1 = Number(time.thur_start.slice(0, 2));
      let thu2 = Number(time.thur_end.slice(0, 2));
      let fri1 = Number(time.fri_start.slice(0, 2));
      let fri2 = Number(time.fri_end.slice(0, 2));
      let sat1 = Number(time.sat_start.slice(0, 2));
      let sat2 = Number(time.sat_end.slice(0, 2));
      let sun1 = Number(time.sun_start.slice(0, 2));
      let sun2 = Number(time.sun_end.slice(0, 2));
      return (
        <>
          <h3>Business Hours</h3>
          <h5>
            {" "}
            Monday: {mon1 === 0 || mon1 < 13 ? mon1 + "am" : mon1 - 12 + "pm"}-
            {mon2 === 0 || mon2 < 13 ? mon2 + "am" : mon2 - 12 + "pm"}{" "}
          </h5>
          <h5>
            {" "}
            Tuesday: {tue1 === 0 || tue1 < 13 ? tue1 + "am" : tue1 - 12 + "pm"}-
            {tue2 === 0 || tue2 < 13 ? tue2 + "am" : tue2 - 12 + "pm"}{" "}
          </h5>
          <h5>
            {" "}
            Wednesday:{" "}
            {wed1 === 0 || wed1 < 13 ? wed1 + "am" : wed1 - 12 + "pm"}-
            {wed2 === 0 || wed2 < 13 ? wed2 + "am" : wed2 - 12 + "pm"}{" "}
          </h5>
          <h5>
            {" "}
            Thursday: {thu1 === 0 || thu1 < 13 ? thu1 + "am" : thu1 - 12 + "pm"}
            -{thu2 === 0 || thu2 < 13 ? thu2 + "am" : thu2 - 12 + "pm"}{" "}
          </h5>
          <h5>
            {" "}
            Friday: {fri1 === 0 || fri1 < 13 ? fri1 + "am" : fri1 - 12 + "pm"}-
            {fri2 === 0 || fri2 < 13 ? fri2 + "am" : fri2 - 12 + "pm"}{" "}
          </h5>
          <h5>
            {" "}
            Saturday: {sat1 === 0 || sat1 < 13 ? sat1 + "am" : sat1 - 12 + "pm"}
            -{sat2 === 0 || sat2 < 13 ? sat2 + "am" : sat2 - 12 + "pm"}{" "}
          </h5>
          <h5>
            {" "}
            Sunday: {sun1 === 0 || sun1 < 13 ? sun1 + "am" : sun1 - 12 + "pm"}-
            {sun2 === 0 || sun2 < 13 ? sun2 + "am" : sun2 - 12 + "pm"}{" "}
          </h5>
        </>
      );
    });
  };

  //////////////////////////////////////////////////to claim/////////////////////////////////////////////////////////////////////
  claimItem = (e, isClaimed) => {
    isClaimed === true
      ? axios
          .patch(`/api/fooditems/claimstatus/${e.target.id}`, {
            client_id: null,
            is_claimed: false
          })
          .then(() => {
            this.getfoodItems();
          })
      : axios
          .patch(`/api/fooditems/claimstatus/${e.target.id}`, {
            client_id: this.props.currentUser.id,
            is_claimed: true
          })
          .then(() => {
            this.getfoodItems();
          });
  };

  render() {
    return (
      <>
        {this.displayBusinessHours()}
        <button
          onClick={!!this.state.isFav.length ? this.deleteFav : this.addFav}
        >
          {!!this.state.isFav.length
            ? "Remove From Favorites"
            : "Add To Favorites"}
        </button>
        {this.displayItems()}
      </>
    );
  }
}

export default VendorProfileThruClient;
