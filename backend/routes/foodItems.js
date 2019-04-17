var express = require("express");
var router = express.Router();
const {
  getAllFoodItems,
  getAllClaimedFoodItems,
  getFoodItemsByClient,
  getFoodItemsByVendor,
  foodItemClaimStatus,
  createNewFoodItem,
  updateFoodItem,
  deleteFoodItem
} = require("../db/queries/foodItemsQueries.js");

router.get("/", getAllFoodItems);
router.get("/client", getAllClaimedFoodItems);
router.get("/clientpage/:name", getFoodItemsByClient);
router.get("/vendor/:id", getFoodItemsByVendor);
router.patch("/claimstatus/:id", foodItemClaimStatus);
router.post("/", createNewFoodItem);
router.patch("/:id", updateFoodItem);
router.delete("/:id", deleteFoodItem);

module.exports = router;
