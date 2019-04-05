var express = require("express");
var router = express.Router();
const {
  getAllVendors,
  getOneVendorById,
  createVendor,
  updateVendor,
  deleteVendor
} = require("../db/queries/vendorQueries.js");


router.get("/", getAllVendors);
router.get("/:id", getOneVendorById);
router.post("/", createVendor);
router.patch("/:id", updateVendor);
router.delete("/:id", deleteVendor);


module.exports = router