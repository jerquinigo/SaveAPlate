var express = require("express");
var router = express.Router();
const {
  getFedCount,
  getAllFoodItems,
  getAllClaimedFoodItems,
  getFoodItemsByClient,
  getFoodItemsByVendorName,
  foodItemClaimStatus,
  createNewFoodItem,
  updateFoodItem,
  deleteFoodItem
} = require("../db/queries/foodItemsQueries.js");

router.get("/", getAllFoodItems);
router.get("/client", getAllClaimedFoodItems);
router.get("/clientpage/:name", getFoodItemsByClient);
router.get("/vendor/:name", getFoodItemsByVendorName);
router.get("/feedingcount", getFedCount);
router.patch("/claimstatus/:id", foodItemClaimStatus);
router.post("/", createNewFoodItem);
router.patch("/:id", updateFoodItem);
router.delete("/:id", deleteFoodItem);

module.exports = router;
