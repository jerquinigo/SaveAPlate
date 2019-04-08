var express = require("express");
var router = express.Router();
const {
  getAllFoodItems,
  getFoodItemsByClient,
  getFoodItemsByVendor,
  createNewFoodItem,
  updateFoodItem,
  deleteFoodItem
} = require("../db/queries/foodItemsQueries.js");

router.get("/", getAllFoodItems);
router.get("/client/:clientID", getFoodItemsByClient);
router.get("/vendor/:vendorID", getFoodItemsByVendor);
router.post("/", createNewFoodItem);
router.patch("/:id", updateFoodItem);
router.delete("/:id", deleteFoodItem);

module.exports = router;
