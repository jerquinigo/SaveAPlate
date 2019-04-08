const { db } = require("../index.js");

getAllFoodItems = (req, res, next) => {
  db.any("SELECT * FROM food_items")
    .then(food_items => {
      res.status(200).json({
        status: "success",
        food_items: food_items,
        message: "recieved all food items"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getFoodItemsByClient = (req, res, next) => {
  let clientID = Number(req.params.id);
  db.any("SELECT * FROM food_items WHERE id=$1", [clientID])
    .then(food_items => {
      res.status(200).json({
        status: "sucess",
        food_items: food_items,
        message: "recieved food items from client"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getFoodItemsByVendor = (req, res, next) => {
  let vendorID = Number(req.params.id);
  db.any("SELECT * FROM food_items WHERE id=$1", [vendorID])
    .then(food_items => {
      res.status(200).json({
        status: "sucess",
        food_items: food_items,
        message: "recieved food items from vendor"
      });
    })
    .catch(err => {
      return next(err);
    });
};

createNewFoodItem = (req, res, next) => {
  db.one(
    "INSERT INTO food_items (quantity, name, is_claimed, vendor_id, set_time) VALUES (${quantity}, ${name}, ${is_claimed}, ${vendor_id}, ${set_time}) RETURNING name",
    {
      quantity: req.body.quantity,
      name: req.body.name,
      is_claimed: req.body.is_claimed,
      vendor_id: req.body.vendor_id,
      set_time: req.body.set_time
    }
  )
    .then(() => {
      res.status(200).json({
        message: "food item has been added"
      });
    })
    .catch(err => {
      return next(err);
    });
};

updateFoodItem = (req, res, next) => {
  db.none(
    "UPDATE food_items SET quantity=${quantity}, name=${name}, is_claimed=${is_claimed}, vendor_id=${vendor_id}, set_time=${set_time} WHERE id=${id}",
    {
      quantity: parseInt(req.body.quantity),
      name: req.body.name,
      is_claimed: req.body.is_claimed,
      vendor_id: parseInt(req.body.vendor_id),
      set_time: req.body.set_time,
      id: parseInt(req.params.id)
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "updated food item"
      });
    })
    .catch(err => {
      return next(err);
    });
};

deleteFoodItem = (req, res, next) => {
  let foodItemID = Number(req.params.id);
  db.result("DELETE FROM food_items WHERE id=$1", foodItemID)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "removed a food item",
        result: result
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllFoodItems,
  getFoodItemsByClient,
  getFoodItemsByVendor,
  createNewFoodItem,
  updateFoodItem,
  deleteFoodItem
};
