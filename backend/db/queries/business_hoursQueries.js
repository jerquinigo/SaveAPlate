const {db} = require('../index.js')

createBusiness_hours = (req,res, next) => {
  db.none('INSERT INTO business_hours (vendor_id, mon_start , mon_end ,tues_start ,tues_end ,wed_start ,wed_end ,thur_start ,thur_end ,fri_start ,fri_end ,sat_start ,sat_end ,sun_start ,sun_end) VALUES (${vendor_id}, ${mon_start} , ${mon_end} ,${tues_start} ,${tues_end} ,${wed_start} ,${wed_end} ,${thur_start} ,${thur_end} ,${fri_start} ,${fri_end} ,${sat_start} ,${sat_end} ,${sun_start} ,${sun_end})', {
    vendor_id : req.params.id,
    mon_start : req.body.mon_start,
    mon_end : req.body.mon_end ,
    tues_start : req.body.tues_start,
    tues_end : req.body.tues_end,
    wed_start : req.body.wed_start,
    wed_end : req.body.wed_end,
    thur_start : req.body.thur_start,
    thur_end : req.body.thur_end,
    fri_start : req.body.fri_start,
    fri_end : req.body.fri_end,
    sat_start : req.body.sat_start,
    sat_end : req.body.sat_end,
    sun_start : req.body.sun_start,
    sun_end: req.body.sun_end
  }) .then(() => {
      res.status(200).json({
          message: "Your business hours has been added"
      })
  })
  .catch(err => {
      return next(err)
  })
}

updateBusiness_hours = (req,res,next) => {
  let vendor_id = Number(req.params.id)
  db.none('UPDATE business_hours SET vendor_id=${vendor_id}, mon_start=${mon_start} , mon_end=${mon_end} ,tues_start=${tues_start} ,tues_end=${tues_end} ,wed_start=${wed_start} ,wed_end=${wed_end} ,thur_start=${thur_start} ,thur_end=${thur_end} ,fri_start=${fri_start} ,fri_end=${fri_end} ,sat_start=${sat_start} ,sat_end=${sat_end} ,sun_start=${sun_start} ,sun_end=${sun_end}',
  {
    vendor_id : vendor_id,
    mon_start : req.body.mon_start,
    mon_end : req.body.mon_end ,
    tues_start : req.body.tues_start,
    tues_end : req.body.tues_end,
    wed_start : req.body.wed_start,
    wed_end : req.body.wed_end,
    thur_start : req.body.thur_start,
    thur_end : req.body.thur_end,
    fri_start : req.body.fri_start,
    fri_end : req.body.fri_end,
    sat_start : req.body.sat_start,
    sat_end : req.body.sat_end,
    sun_start : req.body.sun_start,
    sun_end: req.body.sun_end

  }
).then(() => {
      res.status(200).json({
          message: "Your business hours has been updated"
      })
  })
  .catch(err => {
      return next(err)
  })
}

getVendorHours = (req,res,next) => {
  let vendor_id = Number(req.params.id)
  db.any('SELECT * FROM business_hours WHERE vendor_id=$1', [vendor_id])
  .then(hours => {
        res.status(200).json({
            data: hours
        })
    })
    .catch(err => {
        return next(err)
    })
}

deleteBusiness_hours = (req, res, next) => {
  console.log('MY VENDOR ID', req.params)
  let vendor_id = Number(req.params.id)
  db.result('DELETE FROM business_hours WHERE vendor_id=$1', [vendor_id])
  .then(result => {
        res.status(200).json({
            message: "Your business hours has been deleted",
            result: result
        })
    })
    .catch(err => {
      console.log(err);
        return next(err)
    })
}

module.exports = {
  createBusiness_hours,
  updateBusiness_hours,
  deleteBusiness_hours,
  getVendorHours
}
