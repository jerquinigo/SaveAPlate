import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import "./feedCSS/SearchBar.css";

const SearchBar = props => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div id="search-container">
          <div id="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            type="text"
            onChange={props.handleChange}
            placeholder="Search…"
            value={props.textInput}
            id="search-input"
          />
        </div>
        <Button variant="contained" type="submit" id="search-submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default SearchBar;
