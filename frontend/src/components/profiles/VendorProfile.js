
import React, {Component} from 'react'
import axios from "axios"


class VendorProfile extends Component{
  constructor(){
    super()
      this.state = {
        quantity: '',
        name: '',
        set_time:'',
        toAddItem: false
      }
  }

  componentDidMount () {
    // this.props.fetchUserFoodItems(this.props.currentUser.id)
    this.getCurrId()
  }
// add food items

addItemButton = () => {
  return(<button onClick={this.toAddItem}> Add Item </button>)
}

toAddItem = () => {
  this.setState({
    toAddItem: !this.state.toAddItem
  })
}

  addItemForm = () => {
    return(
      <>
    <form onSubmit={this.submitItem}>
    <input type="text" onChange={this.handleChange} name="quantity" placeholder="How many people can this donation feed?"/>
    <input type="text" onChange={this.handleChange} name="name" placeholder="What dish are you donating?"/>
    <p>What is the lastest time for pick up?</p>
    <select onChange={this.handleChange} name="set_time">
    <option value="null"> Select time </option>
    <option value="00:00"> 12:00 am </option>
    <option value="1:00"> 1:00 am </option>
    <option value="2:00"> 2:00 am </option>
    <option value="3:00"> 3:00 am </option>
    <option value="4:00"> 4:00 am </option>
    <option value="5:00"> 5:00 am </option>
    <option value="6:00"> 6:00 am </option>
    <option value="7:00"> 7:00 am </option>
    <option value="8:00"> 8:00 am </option>
    <option value="9:00"> 9:00 am </option>
    <option value="10:00"> 10:00 am </option>
    <option value="11:00"> 11:00 am </option>
    <option value="12:00"> 12:00 pm </option>
    <option value="13:00"> 1:00 pm </option>
    <option value="14:00"> 2:00 pm </option>
    <option value="15:00"> 3:00 pm </option>
    <option value="16:00"> 4:00 pm </option>
    <option value="17:00"> 5:00 pm </option>
    <option value="18:00"> 6:00 pm </option>
    <option value="19:00"> 7:00 pm </option>
    <option value="20:00"> 8:00 pm </option>
    <option value="21:00"> 9:00 pm </option>
    <option value="22:00"> 10:00 pm </option>
    <option value="23:00"> 11:00 pm </option>
    </select>
    <button type="submit">Add Food Item </button>
    </form>
      </>
    )
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
    .then((res)=> {
      console.log(res.data.message);
    })
  }


//Get items
 getUserfoodItems = (id) => {
   if (!this.props.currentUser.id)
   {
     return "Loading .."
   }else{
  return  this.props.fetchUserFoodItems(this.props.currentUser.id)
  }
 }

getCurrId = async() => {

    await this.props.currentUser.id

  await this.props.fetchUserFoodItems(this.props.currentUser.id)
 }


  render(){
console.log(this.props, "test");
    return(
      <>
      <div className="VendorProfileWrapper profile">
      <h3> {this.props.currentUser.name} </h3>
      {this.state.toAddItem ? this.addItemForm() : this.addItemButton()}
      </div>
      </>
    )
  }
}

export default VendorProfile;
