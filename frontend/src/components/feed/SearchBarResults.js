import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                      {food.is_claimed ? (
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
                      )}
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

// return <p>test</p>;
// <ul key={i} id="display-claimed-items">
//   <li>
//     <Link to={"/clientview/" + results.vendor_name}>
//       {" "}
//       <strong>Name: </strong>
//       {results.vendor_name}
//     </Link>
//   </li>
//
//   <li>
//     <strong>Address: </strong>
//     {results.address_field}
//   </li>
//   <li>
//     <strong>Telephone Number: </strong>
//     {results.telephone_number}
//   </li>
//   <li>
//     <strong>Food Item: </strong>
//     {results.name}
//   </li>
//   <li>
//     <strong>Feeds: </strong>
//     {results.quantity} people
//   </li>
//   <li>({Number(results.quantity) * 3} pounds)</li>
//   <li>
//     <strong>Pick-up Time: </strong>{" "}
//     {converted_time === 0 || converted_time < 13
//       ? converted_time + "am"
//       : converted_time - 12 + "pm"}
//   </li>
//   <li>
//     {results.is_claimed ? (
//       <button
//         className={results.is_claimed ? "claimed" : "unclaimed"}
//         onClick={e => this.props.claimItem(e, results.is_claimed)}
//         id={results.id}
//       >
//         {" "}
//         UNCLAIM
//       </button>
//     ) : (
//       <button
//         onClick={e => this.props.claimItem(e, results.is_claimed)}
//         id={results.id}
//       >
//         CLAIM
//       </button>
//     )}
//   </li>
// </ul>

export default SearchBarResults;

// let vendorName = vendorNameArr.map((vendorName, i) => {
//   return(
//     <div key="i">
//
//   )
//   <div className="vendorItemsWrapper">
//     {foodDataObj[vendorName].map((food, b) => {
//       return (
//         <div className="vendorItemsContainer" key={b}>
//           <span>{food.address_field}</span>
//           <span>{food.telephone_number}</span>
//           <span>{food.name}</span>
//           <span> Feeds: {food.quantity} people</span>
//           <span>({Number(food.quantity) * 3} pounds)</span>
//           <span>
//             {converted_time === 0 || converted_time < 13
//               ? converted_time + "am"
//               : converted_time - 12 + "pm"}
//           </span>
//
//           <span>
//             {food.is_claimed ? (
//               <button
//                 className={food.is_claimed ? "claimed" : "unclaimed"}
//                 onClick={e =>
//                   this.props.claimItem(e, food.is_claimed)
//                 }
//                 id={food.id}
//               >
//                 UNCLAIM
//               </button>
//             ) : (
//               <button
//                 onClick={e =>
//                   this.props.claimItem(e, food.is_claimed)
//                 }
//                 id={food.id}
//               >
//                 CLAIM
//               </button>
//             )}
//           </span>
//         </div>
//       );
//     })}
//   </div>
//   </div>
//
// });
// }
