var express = require("express");
var router = express.Router();
const {
  getAllFoodItems,
  getClaimedFoodItemsByClient,
  getFoodItemsByClient,
  getFoodItemsByVendor,
  foodItemClaimStatus,
  createNewFoodItem,
  updateFoodItem,
  deleteFoodItem
} = require("../db/queries/foodItemsQueries.js");

router.get("/", getAllFoodItems);
router.get("/clientpage/:name", getFoodItemsByClient);
router.get("/client/:name", getClaimedFoodItemsByClient);
router.get("/vendor/:id", getFoodItemsByVendor);
router.patch("/claimstatus/:id", foodItemClaimStatus);
router.post("/", createNewFoodItem);
router.patch("/:id", updateFoodItem);
router.patch("/claimstatus/:id", foodItemClaimStatus);
router.delete("/:id", deleteFoodItem);

module.exports = router;
