import React, {Component} from 'react'
import axios from "axios"
import {getFoodItemsByVendor} from '../../../utils/UtilFoodItems.js'
import AddItemForm from './AddItemsForm.js'


class VendorProfile extends Component{
  constructor(){
    super()
      this.state = {
        quantity: '',
        name: '',
        set_time:'',
        toAddItem: false,
        claimedItems: [],
        unclaimedItems: [],
        donated: false
      }
  }

  componentDidMount () {
    this.vendorDonations()
  }

////////////////////////////////////////////////////////////// add food items /////////////////////////////////////////////////////////////////////

addItemButton = () => {
  return(<button onClick={this.toAddItem}> Add Item </button>)
}

toAddItem = () => {
  this.setState({
    toAddItem: !this.state.toAddItem,
     donated: false
  })
}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = (e) => {
    e.preventDefault()
    const {quantity,name,set_time} = this.state
    axios.post('/api/fooditems/', {
      quantity: quantity,
      name: name,
      set_time: set_time,
      vendor_id:this.props.currentUser.id
    })
    .then(()=> {
      this.setState({
       donated: true,
       toAddItem: false
      })
    })
    .then(()=> {
      this.vendorDonations()
    })
  }

/////////////////////////////////////////////////////////////////Get items/////////////////////////////////////////////////////////////
vendorDonations = () => {
  getFoodItemsByVendor(this.props.currentUser.id)
    .then((data) => {
        let unclaimed = data.data.food_items.filter((item) => {
            return item.is_claimed === false
          })
          this.setState({
            unclaimedItems : unclaimed
          })
          let claimed = data.data.food_items.filter((item) => {
            return item.is_claimed === true
          })
          this.setState({
            claimedItems : claimed
          })
        }
    )
  }

/////////////////////////////////////////////////////////////DISPLAY ITEMS ///////////////////////////////////////////////////////////////////
displayUnclaimedItems = () => {
    return this.state.unclaimedItems.map((item, key) => {
          let converted_time = Number(item.set_time.slice(0,2))
      return (
          <div key={item.id}>
          <button onClick={this.deleteItem} id={item.id}>
          <img id={item.id} src="https://cdn1.iconfinder.com/data/icons/round-ui/123/47-512.png" alt="" height="25" width="25"/>
          </button>
          <h3> Food Dish </h3>
          <h3>{item.name}</h3>
          <h3> Feeds </h3>
          <h3>{item.quantity}</h3>
          <h3> Lastest Pick Up Time </h3>
          <h3>{converted_time === 0 || converted_time < 13 ? converted_time + "am" : converted_time-12 + "pm"}</h3>
         {item.is_claimed ? <button onClick={(e)=> this.claimItem(e, item.is_claimed)} id={item.id}>CLAIMED</button> : <button onClick={(e)=> this.claimItem(e, item.is_claimed)} id={item.id}>UNCLAIMED</button>}
          </div>
      )
  })
}

displayClaimedItems = () => {
  return this.state.claimedItems.map((item, key) => {
    let converted_time = Number(item.set_time.slice(0,2))
    return (
        <div key={item.id}>
        <h3> Food Dish </h3>
        <h4>{item.name}</h4>
        <h3> Feeds </h3>
        <h4>{item.quantity}</h4>
        <h3> Pick Up Time </h3>
        <h4>{converted_time === 0 || converted_time < 13 ? converted_time + "am" : converted_time-12 + "pm"}</h4>
       {item.is_claimed ? <button onClick={(e)=> this.claimItem(e, item.is_claimed)} id={item.id}>CLAIMED</button> : <button onClick={(e)=> this.claimItem(e, item.is_claimed)} id={item.id}>UNCLAIMED</button>}
        </div>
    )
})
}

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
//////////////////////////////////////FAVORITE VENDOR /////////////////////////////////////////////////////////////


  render(){
    return(
      <>
      <div className="VendorProfileWrapper profile">
      <h3> {this.props.currentUser.name} </h3>
      {this.state.toAddItem ? <AddItemForm handleChange={this.handleChange} submitItem={this.submitItem}/> : this.addItemButton()}
      {this.state.donated ? (this.addItemButton(), 'Thank you for donating!') : null}
      <h1> Donation List </h1>
      {this.displayUnclaimedItems()}
      <h1> Claimed Items </h1>
      {this.displayClaimedItems()}
      
      </div>
      </>
    )
  }
}

export default VendorProfile;
