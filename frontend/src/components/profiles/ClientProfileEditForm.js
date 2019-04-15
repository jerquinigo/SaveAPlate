import React, {Component} from 'react'


class ClientProfileEditForm extends Component{
  constructor(){
    super()
    this.state = {
      editProfileButton: false,
      name: "",
      email: "",
      address_field: "",
      body: "",
      telephone_number: "",
      client_certificate: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleEditFormLogic = () => {
    this.setState({
      editProfileButton: !this.state.editProfileButton
    })
  }

  editProfile = () => {
    return(
      <button onClick={this.toggleEditFormLogic}>Edit Profile</button>
    )
  }

  displayEditForm = () => {
    return(
      <div className="displayEditFormPage">
        <form>

          <input onChange={this.handleChange} name="name" type="text" placeholder="enter name"/>
          <br / >
          <input onChange={this.handleChange} name="email" type="text" placeholder="enter email" />
          <br />
          <input onChange={this.handleChange} name="address_field" type="text" placeholder="enter address" />
          <br />
          <input onChange={this.handleChange} name="body" type="text" placeholder="enter new description" />
          <br />
          <input onChange={this.handleChange} name="telephone_number" type="text" placeholder="enter telephone number" />
          <br />

          <input onChange={this.handleChange} name="client_certificate" type="text" placeholder="enter client certificate" />
          <br />
        </form>

      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render(){
    console.log(this.state)
    return(
      <div className="ClientFormMainPage">
      {this.editProfile()}
      {this.state.editProfileButton? this.displayEditForm(): null}
      </div>
    )
  }
}

export default ClientProfileEditForm
