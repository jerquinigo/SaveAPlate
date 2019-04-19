import React from 'react'



const SearchBar = (props) => {

    return (
      <>
        <form onSubmit = {props.handleSubmit}>
          <input
            type='text'
            onChange={props.handleChange}
            placeholder=''
            value={props.textInput}
          />
          <button type='submit'>Submit</button>
        </form>
      </>
    )
  }



export default SearchBar
