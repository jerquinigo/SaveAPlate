import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./feedCSS/SearchBar.css";

const SearchBar = props => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div id="search-container">
          <InputBase
            type="text"
            onChange={props.handleChange}
            placeholder="Search…"
            value={props.textInput}
            id="search-input"
          />
          <button type="submit" id="search-submit">
            <SearchIcon id="search-icon" />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
