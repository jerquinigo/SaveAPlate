import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class SearchBar extends Component {
  this.state = {
    textInput: ""
  }

  handleChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()

  }

  handleChange = (e) => {
      let searchResult = this.state.allFoodItems.filter(item => {
        return (item.vendor_name.toLowerCase() === this.state.textInput.toLowerCase() || item.name.toLowerCase() === this.state.textInput.toLowerCase() )})

      this.setState({
        textInput: e.target.value,
        userSearchResults: searchResult
      })
    }

    handleSubmit = (e) => {
    e.preventDefault()
    let searchResult = this.state.allSongs.filter(song => {
      let theSong = song.title.toLowerCase()

      let text = this.state.textInput.toLowerCase()

      return theSong.includes(text)
    })
      this.setState({
        userSearchResults: searchResult, textInput: "",
        submitted: true
      })

    }

  render(){
    return (
        <form onSubmit = {this.handleSubmit}>
          <input
            type='text'
            onChange={thishandleChange}
            placeholder=''
            value={this.state.textInput}
          />
          <button type='submit'>Submit</button>
        </form>

      </div>
    )
  }
}


export default Searchbar
