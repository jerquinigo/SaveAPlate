import React from "react";
import { Link } from "react-router-dom";

const SearchBarResultsVendorDisplay = props => {
  return (
    <span>
      {props.allVendors.map(info => {
        if (info.vendor_name === props.vendorName) {
          return (
            <div className="display-vendor-name-feed-search">
              {/* <span className="address-text">
                {info.address_field}
              </span> */}
              {/* <img src={info.profile_picture} alt="" /> */}
              <Link to={"/clientview/" + props.vendorName}>
                <strong>{props.vendorName}</strong>{" "}
              </Link>
              <div className="vendor-address-field">
                <p className="address-text">{info.address_field}</p>
              </div>
              <div className="vendor-account-profile-pic">
                <img
                  className="feed-profile-pic"
                  src={info.profile_picture}
                  alt=""
                />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </span>
  );
};

export default SearchBarResultsVendorDisplay;
