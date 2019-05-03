import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllFeedItems extends Component {

  displayNameAndAddress = (vendorAddress, vendorName, i) => {
console.log(vendorAddress[1], "in the outer function")
    // if (vendorAddress.length === i) {
    return(
    <span>
      <Link to={"/clientview/" + vendorName}>
        <strong>{vendorName}</strong>{" "}
      </Link>
        <strong>{!!vendorAddress ? null: vendorAddress[i]}</strong>{" "}


    </span>
  )
  // }
}

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
      let vendorAddress=[];
      console.log('vendorNameArr', vendorNameArr);
      console.log('vendorAddress', vendorAddress);
      let vendorName = vendorNameArr.map((vendorName, i) => {
        debugger;
        let result;
        // <div key={i}>
        //   <span>
        //     <Link to={"/clientview/" + vendorName}>
        //       <strong>{vendorName}</strong>{" "}
        //     </Link>
        //       <strong>{result}</strong>{" "}
        //
        //
        //   </span>

        return (


            <div className="vendorItemsWrapper">
            {this.displayNameAndAddress(vendorAddress,vendorName, i)}
              {foodDataObj[vendorName].map((food, b) => {
                console.log(foodDataObj[vendorName]);
                console.log(food.vendor_name);

                if (vendorName === food.vendor_name) {
                  console.log(foodDataObj[vendorName]);
                  console.log(food.vendor_name);


                  if (!vendorAddress.includes(food.address_field)) {
                    console.log(foodDataObj[vendorName]);
                    console.log(food.vendor_name);

                    vendorAddress.push(food.address_field);
                    // this.displayNameAndAddress(vendorAddress,vendorName)
                  }
                }



                console.log("YOO",vendorAddress);

                console.log("LENGTH of ARRAY",vendorAddress.length);
                console.log("CURRENT i", i);
                console.log("vendorAddress[i] i", vendorAddress[i]);


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
          // </div>
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
