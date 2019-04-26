const { db } = require("../index.js");

getFedCount = (req, res, next) => {
  db.any(
    "SELECT SUM(quantity) FROM food_items WHERE vendor_id=$1 AND is_claimed = TRUE",
    [+req.session.currentUser.id]
  )
    .then(fedCount => {
      res.status(200).json({
        status: "success",
        fedCount: fedCount,
        message: "received total fed count for current vendor"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getAllFoodItems = (req, res, next) => {
  db.any(
    "SELECT food_items.* , users.name AS vendor_name , users.address_field , users.telephone_number FROM food_items JOIN users ON food_items.vendor_id = users.id ORDER BY food_items.set_time ASC"
  )
    .then(food_items => {
      res.status(200).json({
        status: "success",
        food_items: food_items,
        message: "received all food items"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getAllClaimedFoodItems = (req, res, next) => {
  console.log("hi");
  console.log(req.session.currentUser, "whats up");
  db.any(
    "SELECT food_clients.*, users.name AS vendor_name FROM (SELECT food_items.*, users.name AS client_name, users.address_field, users.telephone_number FROM food_items JOIN users ON food_items.client_id=users.id) AS food_clients JOIN users ON food_clients.vendor_id=users.id WHERE client_id=$1",
    [+req.session.currentUser.id]
  )
    .then(food_items => {
      res.status(200).json({
        status: "success",
        food_items: food_items,
        message: "received all food items"
      });
    })
    .catch(err => {
      return next(err);
    });
};

//after claiming it

getFoodItemsByClient = (req, res, next) => {
  const clientName = req.params.name;
  db.any(
    "SELECT * FROM food_items JOIN users ON food_items.client_id=users.id WHERE users.name=$1",
    [clientName]
  )
    .then(food_items => {
      res.status(200).json({
        status: "sucess",
        food_items: food_items,
        message: "received food items from client"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getFoodItemsByVendorName = (req, res, next) => {
  let vendorName = req.params.name;
  db.any(
    "SELECT food_items.id AS food_id, food_items.quantity, food_items.name, food_items.client_id, food_items.vendor_id, food_items.is_claimed, food_items.set_time, users.id AS user_id, users.name AS vendor_name, users.email AS vendor_email, users.type, users.address_field AS vendor_address, users.body, users.telephone_number, users.ein FROM food_items JOIN users ON food_items.vendor_id = users.id WHERE users.name =$1",
    [vendorName]
  )
    .then(food_items => {
      res.status(200).json({
        status: "sucess",
        food_items: food_items,
        message: "received food items from vendor"
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

createNewFoodItem = (req, res, next) => {
  db.one(
    "INSERT INTO food_items (quantity, name, vendor_id, set_time) VALUES (${quantity}, ${name}, ${vendor_id}, ${set_time}) RETURNING name",
    {
      quantity: req.body.quantity,
      name: req.body.name,
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
      console.log(err);
      return next(err);
    });
};

foodItemClaimStatus = (req, res, next) => {
  db.none(
    "UPDATE food_items SET is_claimed=${is_claimed}, client_id=${client_id} WHERE id=${id}",
    {
      is_claimed: req.body.is_claimed,
      // client_id: +req.session.currentUser.id,
      client_id: req.body.client_id,
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

updateFoodItem = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(",");
  if (req.body.quantity === "null") {
    req.body.quantity = null;
  }
  if (req.body.name && req.body.name.toLowerCase() === "null") {
    req.body.name = null;
  }
  if (req.body.set_time && req.body.set_time.toLowerCase() === "null") {
    req.body.set_time = null;
  }

  db.none(
    "UPDATE food_items SET " +
      queryString +
      " WHERE id=" +
      Number(req.params.id),
    req.body
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
  const foodItemID = Number(req.params.id);
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
  getFedCount,
  getAllFoodItems,
  getAllClaimedFoodItems,
  getFoodItemsByClient,
  getFoodItemsByVendorName,
  createNewFoodItem,
  foodItemClaimStatus,
  updateFoodItem,
  deleteFoodItem
};
