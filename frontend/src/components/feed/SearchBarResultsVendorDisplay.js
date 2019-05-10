import React from "react";
import { Link } from "react-router-dom";

const SearchBarResultsVendorDisplay = props => {
  return (
    <span>
      <Link to={"/clientview/" + props.vendorName}>
        <strong>{props.vendorName}</strong>{" "}
      </Link>
    </span>
  );
};

export default SearchBarResultsVendorDisplay;
