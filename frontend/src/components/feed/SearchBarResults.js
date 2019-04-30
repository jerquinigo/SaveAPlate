import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBarResults extends Component {
  displayResults = () => {
    if (this.props.userSearchResults.length > 0) {
      this.props.userSearchResults.map((results, i) => {
        let converted_time = Number(results.set_time.slice(0, 2));
        return (
          <ul key={i} id="display-claimed-items">
            <li>
              <Link to={"/clientview/" + results.vendor_name}>
                {" "}
                <strong>Name: </strong>
                {results.vendor_name}
              </Link>
            </li>

            <li>
              <strong>Address: </strong>
              {results.address_field}
            </li>
            <li>
              <strong>Telephone Number: </strong>
              {results.telephone_number}
            </li>
            <li>
              <strong>Food Item: </strong>
              {results.name}
            </li>
            <li>
              <strong>Feeds: </strong>
              {results.quantity} people
            </li>
            <li>({Number(results.quantity) * 3} pounds)</li>
            <li>
              <strong>Pick-up Time: </strong>{" "}
              {converted_time === 0 || converted_time < 13
                ? converted_time + "am"
                : converted_time - 12 + "pm"}
            </li>
            <li>
              {results.is_claimed ? (
                <button
                  className={results.is_claimed ? "claimed" : "unclaimed"}
                  onClick={e => this.props.claimItem(e, results.is_claimed)}
                  id={results.id}
                >
                  {" "}
                  UNCLAIM
                </button>
              ) : (
                <button
                  onClick={e => this.props.claimItem(e, results.is_claimed)}
                  id={results.id}
                >
                  CLAIM
                </button>
              )}
            </li>
          </ul>
        );
      });
    }
  };
  render() {
    return <>{this.displayResults()}</>;
  }
}

export default SearchBarResults;
