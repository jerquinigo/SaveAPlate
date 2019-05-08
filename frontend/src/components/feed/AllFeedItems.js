import React, { Component } from "react";
import AllFeedItemsDisplayed from "./AllFeedItemsDisplayed.js";
import AllFeedItemsDisplayVendorName from "./AllFeedItemsDisplayVendorName.js";
import "./feedCSS/AllFeedItems.css";


class AllFeedItems extends Component {
  constructor() {
    super();
    this.state = {
      pictureObj: []
    };
  }

  allVendorsMapped = foodDataObj => {
    if (!foodDataObj) return null;
    let newObj = {};
    let vendorNameArr = Object.keys(foodDataObj);
    vendorNameArr.forEach((vendorName, i) => {
      foodDataObj[vendorName].forEach(vendor => {
        this.props.allVendors.forEach(pics => {
          if (vendor.vendor_id === pics.vendor_id) {
            newObj[vendor.address_field] = pics.profile_picture;
          }
        });
      });
    });

    return newObj;
  };

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
      // this.allVendorsMapped(foodDataObj);

      let vendorNameArr = Object.keys(foodDataObj);

      let vendorName = vendorNameArr.map((vendorName, i) => {
        return (
          <div key={i}>
            <AllFeedItemsDisplayVendorName
              vendorName={vendorName}
              foodDataObj={foodDataObj}
              profilePicture={this.allVendorsMapped(foodDataObj)}
            />
            <AllFeedItemsDisplayed
              foodDataObj={foodDataObj}
              claimItem={this.props.claimItem}
              converted_time={converted_time}
              vendorName={vendorName}
              receivedOpenSnackbar={this.props.receivedOpenSnackbar}
            />
          </div>
        );
      });
      return vendorName;
    }
  };
  render() {
    console.log(this.state.pictureObj, "help");
    // let value;
    // if (this.props.allFoodItems) {
    //   value = this.allVendorsMapped();
    // }
    // let pictureObj = this.allVendorsMapped();
    // console.log(pictureObj, "sellslpoke")
    console.log(this.props.allVendors, "all the vendi");
    return <>{this.allFoodItemsMapped()}</>;
  }
}

export default AllFeedItems;

// <div className="display-vendor-name">
//   <span>
//     <Link to={"/clientview/" + vendorName}>
//       <strong className="display-item-name">{vendorName}</strong>{" "}
//     </Link>
//     {this.getAllAddress(foodDataObj, vendorName)}
//   </span>
// </div>
//

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
