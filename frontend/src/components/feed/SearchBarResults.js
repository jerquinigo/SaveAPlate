import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

class SearchBarResults extends Component {
  // will need to apply the search object filter here just like all the others to get it to work to group
  displaySearchResults = () => {
    let searchDataObj = {};
    let converted_time;
    if (this.props.userSearchResults.length > 0) {
      let searchResults = this.props.userSearchResults.filter(result => {
        return result.is_claimed !== true;
      });
      console.log(searchResults, "searchResult");
      searchResults.map((results, i) => {
        if (!searchDataObj[results.vendor_name]) {
          searchDataObj[results.vendor_name] = [results];
        } else if (searchDataObj[results.vendor_name]) {
          searchDataObj[results.vendor_name].push(results);
          console.log(searchDataObj, "in the search results");
        }
        converted_time = Number(results.set_time.slice(0, 2));
      });
      let vendorNameArr = Object.keys(searchDataObj);

      let vendorName = vendorNameArr.map((vendorName, a) => {
        return (
          <div key="a">
            <span>
              <Link to={"/clientview/" + vendorName}>
                <strong>{vendorName}</strong>{" "}
              </Link>
            </span>

            <div className="vendorItemsWrapper">
              {searchDataObj[vendorName].map((food, b) => {
                debugger;
                return (
                  <div className="vendorItemsContainer" key={b}>
                    <span>{food.address_field}</span>
                    <span>{food.telephone_number}</span>
                    <span>{food.name}</span>
                    <span> Feeds: {food.quantity} people</span>
                    <span>({Number(food.quantity) * 3} pounds)</span>
                    <span>
                      {converted_time === 0 || converted_time < 13
                        ? converted_time + "am"
                        : converted_time - 12 + "pm"}
                    </span>

                    <span>
                      <MuiThemeProvider theme={theme}>
                        <Button
                          id={food.id}
                          variant="contained"
                          color="secondary"
                          onClick={e => {
                            this.props.claimItem(e, food.is_claimed);
                            this.props.receivedOpenSnackbar();
                          }}
                          className={
                            food.is_claimed
                              ? "claimed-button"
                              : "unclaimed-button"
                          }
                        >
                          {food.is_claimed ? "UNCLAIM" : "CLAIM"}
                        </Button>
                      </MuiThemeProvider>

                      {/*{food.is_claimed ? (
                        <button
                          className={food.is_claimed ? "unclaimed" : "claimed"}
                          onClick={e =>
                            this.props.claimItem(e, food.is_claimed)
                          }
                          id={food.id}
                        >
                          UNCLAIM
                        </button>
                      ) : (
                        <button
                          className={food.is_claimed ? "unclaimed" : "claimed"}
                          onClick={e =>
                            this.props.claimItem(e, food.is_claimed)
                          }
                          id={food.id}
                        >
                          CLAIM
                        </button>
                      )}*/}
                    </span>
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

  render() {
    return <div>{this.displaySearchResults()}</div>;
  }
}

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: "#5cbc5c"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default SearchBarResults;
