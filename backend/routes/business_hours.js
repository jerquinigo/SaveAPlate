var express = require("express");
var router = express.Router();
const {
  createBusiness_hours,
  updateBusiness_hours,
  deleteBusiness_hours,
  getVendorHours
} = require("../db/queries/business_hoursQueries.js");

router.get('/:name', getVendorHours)
router.post('/:id', createBusiness_hours)
router.patch('/:id', updateBusiness_hours)
router.delete('/:id', deleteBusiness_hours)


module.exports = router
