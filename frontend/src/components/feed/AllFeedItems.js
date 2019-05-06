import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllFeedItemsDisplayed from "./AllFeedItemsDisplayed.js";
import "./feedCSS/AllFeedItems.css";
import Button from "@material-ui/core/Button";

class AllFeedItems extends Component {
  allFoodItemsMapped = () => {
    if (this.props.allFoodItems) {
      let foodDataObj = {};
      let converted_time;
      // eslint-disable-next-line
      this.props.allFoodItems.map((food, i) => {
        converted_time = Number(food.set_time.slice(0, 2));
        if (!foodDataObj[food.vendor_name] && food.is_claimed === false) {
          foodDataObj[food.vendor_name] = [food];
        } else if (foodDataObj[food.vendor_name] && food.is_claimed === false) {
          foodDataObj[food.vendor_name].push(food);
          console.log(foodDataObj, "the food data in obj");
        }
      });

      let vendorNameArr = Object.keys(foodDataObj);

      let vendorName = vendorNameArr.map((vendorName, i) => {
        return (
          <div key={i}>
            <div className="display-vendor-name">
              <span>
                <Link to={"/clientview/" + vendorName}>
                  <strong className="display-item-name">{vendorName}</strong>{" "}
                </Link>
              </span>
            </div>

            <AllFeedItemsDisplayed
              foodDataObj={foodDataObj}
              claimItem={this.props.claimItem}
              converted_time={converted_time}
              vendorName={vendorName}
            />
          </div>
        );
      });
      return vendorName;
    }
  };
  render() {
    return <>{this.allFoodItemsMapped()}</>;
  }
}

export default AllFeedItems;

// <div className="vendorItemsWrapper">
//   {foodDataObj[vendorName].map((food, b) => {
//     return (
//       <div className="vendorItemsContainer" key={b}>
//         <div className="display-claimed-items">
//           <span className="display-item-name">{food.name}</span>
//           <span> Feeds: {food.quantity} people</span>
//           <span>({Number(food.quantity) * 3} pounds)</span>
//           <span>
//             {converted_time === 0 || converted_time < 13
//               ? converted_time + "am"
//               : converted_time - 12 + "pm"}
//           </span>
//
//           <span>
//             <Button
//               id={food.id}
//               onClick={e =>
//                 this.props.claimItem(e, food.is_claimed)
//               }
//               variant="contained"
//               color="secondary"
//               className={
//                 food.is_claimed
//                   ? "claimed-button"
//                   : "unclaimed-button"
//               }
//             >
//               {food.is_claimed ? "UNCLAIM" : "AVAILABLE"}
//             </Button>
//           </span>
//         </div>
//       </div>
//     );
//   })}
// </div>
