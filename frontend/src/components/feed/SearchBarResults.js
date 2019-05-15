import React from "react";
import SearchBarResultsVendorDisplay from "./SearchBarResultsVendorDisplay.js";
import SearchBarResultsVendorItemsDisplay from "./SearchBarResultsVendorItemsDisplay.js";
import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import "./feedCSS/SearchBarResults.css";

const theme = createMuiTheme({
  palette: {
    primary: { 500: "#D35348" },
    secondary: {
      main: "#008000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

// will need to apply the search object filter here just like all the others to get it to work to group
export const SearchBarResults = props => {
  let searchDataObj = {};
  let converted_time;
  if (props.userSearchResults.length > 0) {
    let searchResults = props.userSearchResults.filter(result => {
      return result.is_claimed !== true;
    });
    // eslint-disable-next-line
    searchResults.map((results, i) => {
      if (!searchDataObj[results.vendor_name]) {
        searchDataObj[results.vendor_name] = [results];
      } else if (searchDataObj[results.vendor_name]) {
        searchDataObj[results.vendor_name].push(results);
      }
      converted_time = Number(results.set_time.slice(0, 2));
    });
    let vendorNameArr = Object.keys(searchDataObj);

    let vendorName = vendorNameArr.map((vendorName, a) => {
      return (
        <div key="a">
          <SearchBarResultsVendorDisplay
            vendorName={vendorName}
            allVendors={props.allVendors}
          />

          <div className="vendorItemsWrapper">
            <div id="search-items-header">
              <h4 className="search-results-item-name">Food Item </h4>
              <h4 className="search-results-weight">Weight </h4>
              <h4 className="search-results-feeds">Feeds </h4>
              <h4 className="search-results-pick-up">Pick Up Time </h4>
              <div id="spacing" />
            </div>
            {searchDataObj[vendorName].map((food, b) => {
              return (
                <div className="search-results-container" key={b}>
                  <SearchBarResultsVendorItemsDisplay
                    food={food}
                    claimItem={props.claimItem}
                    receivedOpenSnackbar={props.receivedOpenSnackbar}
                    converted_time={converted_time}
                    theme={theme}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    });
    return vendorName;
  }
};
