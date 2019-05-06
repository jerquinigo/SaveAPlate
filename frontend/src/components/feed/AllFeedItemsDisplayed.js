import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class AllFeedItemsDisplayed extends Component {
  render() {
    // let vendorName = Object.keys(this.props.foodDataObj);
    return (
      <div className="vendorItemsWrapper">
        {this.props.foodDataObj[this.props.vendorName].map((food, b) => {
          return (
            <div className="vendorItemsContainer" key={b}>
              <div className="display-claimed-items">
                <span className="display-item-name">{food.name}</span>
                <span> Feeds: {food.quantity} people</span>
                <span>({Number(food.quantity) * 3} pounds)</span>
                <span>
                  {this.props.converted_time === 0 ||
                  this.props.converted_time < 13
                    ? this.props.converted_time + "am"
                    : this.props.converted_time - 12 + "pm"}
                </span>

                <span>
                  <Button
                    id={food.id}
                    onClick={e => this.props.claimItem(e, food.is_claimed)}
                    variant="contained"
                    color="secondary"
                    className={
                      food.is_claimed ? "claimed-button" : "unclaimed-button"
                    }
                  >
                    {food.is_claimed ? "UNCLAIM" : "AVAILABLE"}
                  </Button>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllFeedItemsDisplayed;
