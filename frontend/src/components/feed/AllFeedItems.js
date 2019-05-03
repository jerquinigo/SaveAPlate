import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <span>
              <Link to={"/clientview/" + vendorName}>
                <strong>{vendorName}</strong>{" "}
              </Link>
            </span>

            <div className="vendorItemsWrapper">
              {foodDataObj[vendorName].map((food, b) => {
                return (
                  <div className="vendorItemsContainer" key={b}>

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
                          className={food.is_claimed ? "claimed" : "unclaimed"}
                          onClick={e =>
                            this.props.claimItem(e, food.is_claimed)
                          }
                          id={food.id}
                        >
                          UNCLAIM
                        </button>
                      ) : (
                        <button
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
    return <>{this.allFoodItemsMapped()}</>;
  }
}

export default AllFeedItems;
