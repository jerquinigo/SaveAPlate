import React from "react";
import { Link } from "react-router-dom";

const SearchBarResultsVendorDisplay = props => {
  // props.allVendors.map(pic => {
  //   debugger;
  // });
  return (
    <span>
      <Link to={"/clientview/" + props.vendorName}>
        <strong>{props.vendorName}</strong>{" "}
      </Link>
      {props.allVendors.map(pic => {
        if (pic.vendor_name === props.vendorName) {
          return <img src={pic.profile_picture} alt="" />;
        } else {
          return null;
        }
      })}
    </span>
  );
};

export default SearchBarResultsVendorDisplay;
