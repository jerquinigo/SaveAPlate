const { db } = require("../index.js");

createBusiness_hours = (req, res, next) => {
  db.none(
    "INSERT INTO business_hours (vendor_id, mon_start , mon_end ,tues_start ,tues_end ,wed_start ,wed_end ,thur_start ,thur_end ,fri_start ,fri_end ,sat_start ,sat_end ,sun_start ,sun_end) VALUES (${vendor_id}, ${mon_start} , ${mon_end} ,${tues_start} ,${tues_end} ,${wed_start} ,${wed_end} ,${thur_start} ,${thur_end} ,${fri_start} ,${fri_end} ,${sat_start} ,${sat_end} ,${sun_start} ,${sun_end})",
    {
      vendor_id: req.params.id,
      mon_start: req.body.mon_start,
      mon_end: req.body.mon_end,
      tues_start: req.body.tues_start,
      tues_end: req.body.tues_end,
      wed_start: req.body.wed_start,
      wed_end: req.body.wed_end,
      thur_start: req.body.thur_start,
      thur_end: req.body.thur_end,
      fri_start: req.body.fri_start,
      fri_end: req.body.fri_end,
      sat_start: req.body.sat_start,
      sat_end: req.body.sat_end,
      sun_start: req.body.sun_start,
      sun_end: req.body.sun_end
    }
  )
    .then(() => {
      res.status(200).json({
        message: "Your business hours has been added"
      });
    })
    .catch(err => {
      return next(err);
    });
};

updateBusiness_hours = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(",");
  if (req.body.mon_start && req.body.mon_start.toLowerCase() === "null") {
    req.body.mon_start = null;
  }
  if (
    req.body.mon_end &&
    req.body.mon_end.toString().toLowerCase() === "null"
  ) {
    req.body.mon_end = false;
  }
  if (
    req.body.tues_start &&
    req.body.tues_start.toString().toLowerCase() === "null"
  ) {
    req.body.tues_start = false;
  }
  if (
    req.body.tues_end &&
    req.body.tues_end.toString().toLowerCase() === "null"
  ) {
    req.body.tues_end = false;
  }
  if (
    req.body.wed_start &&
    req.body.wed_start.toString().toLowerCase() === "null"
  ) {
    req.body.wed_start = false;
  }
  if (
    req.body.wed_end &&
    req.body.wed_end.toString().toLowerCase() === "null"
  ) {
    req.body.wed_end = false;
  }
  if (
    req.body.thur_start &&
    req.body.thur_start.toString().toLowerCase() === "null"
  ) {
    req.body.thur_start = false;
  }
  if (
    req.body.thur_end &&
    req.body.thur_end.toString().toLowerCase() === "null"
  ) {
    req.body.thur_end = false;
  }
  if (
    req.body.fri_start &&
    req.body.fri_start.toString().toLowerCase() === "null"
  ) {
    req.body.fri_start = false;
  }
  if (
    req.body.fri_end &&
    req.body.fri_end.toString().toLowerCase() === "null"
  ) {
    req.body.fri_end = false;
  }
  if (
    req.body.sat_start &&
    req.body.sat_start.toString().toLowerCase() === "null"
  ) {
    req.body.sat_start = false;
  }
  if (
    req.body.sat_end &&
    req.body.sat_end.toString().toLowerCase() === "null"
  ) {
    req.body.sat_end = false;
  }
  if (
    req.body.sun_start &&
    req.body.sun_start.toString().toLowerCase() === "null"
  ) {
    req.body.sun_start = false;
  }
  if (
    req.body.sun_end &&
    req.body.sun_end.toString().toLowerCase() === "null"
  ) {
    req.body.sun_end = false;
  }

  db.none(
    "UPDATE business_hours SET " +
      queryString +
      " WHERE id=" +
      Number(req.params.id),
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: "Your business hours have been updated"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getVendorHours = (req, res, next) => {
  let vendor_id = Number(req.params.id);
  db.any("SELECT * FROM business_hours WHERE vendor_id=$1", [vendor_id])
    .then(hours => {
      res.status(200).json({
        data: hours
      });
    })
    .catch(err => {
      return next(err);
    });
};

deleteBusiness_hours = (req, res, next) => {
  console.log("MY VENDOR ID", req.params);
  let vendor_id = Number(req.params.id);
  db.result("DELETE FROM business_hours WHERE vendor_id=$1", [vendor_id])
    .then(result => {
      res.status(200).json({
        message: "Your business hours has been deleted",
        result: result
      });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
};

module.exports = {
  createBusiness_hours,
  updateBusiness_hours,
  deleteBusiness_hours,
  getVendorHours
};
