const {db} = require('../index.js')

const getAllVendors = (req,res,next) => {
    db.any('SELECT * FROM vendors')
        .then(vendors => {
            res.status(200).json({
                status: "Success!",
                message: "all vendors",
                data: vendors
            })
        })
    .catch(err => {
        return next(err)
    })
}



const getOneVendorById = (req,res,next) => {
    const vendorId = Number(req.params.id)
        db.one('SELECT * FROM vendors WHERE id=$1', [vendorId])
            .then(vendor => {
                res.status(200).json({
                    status: "Success!",
                    message: "one vendor",
                    vender: vendor
                })
            })
     .catch(err => {
        return next(err)
      })
}

const createVendor = (req,res,next) => {
    db.one(
      'INSERT INTO vendors (email, password_digest,name, address_field, body, telephone_number, employee_id_number) VALUES (${email}, ${password_digest},${name}, ${address_field}, ${body}, ${telephone_number}, ${employee_id_number}) RETURNING name', {
            email: req.body.email,
            password_digest: req.body.password_digest,
            name: req.body.name,
            address_field: req.body.address_field,
            body: req.body.body,
            telephone_number: req.body.telephone_number,
            employee_id_number: Number(req.body.employee_id_number)
      }
    ).then(() => {
        res.status(200).json({
            message: "Vendor Has Been Added :)"
        })
    })
    .catch(err => {
        return next(err)
    });
}

const updateVendor = (req,res,next) => {

    db.none(
      "UPDATE vendors SET email=${email},password_digest=${password_digest},name=${name}, address_field=${address_field}, body=${body}, telephone_number=${telephone_number}, employee_id_number=${employee_id_number} WHERE id=${id}",
      {
        email: req.body.email,
        password_digest: req.body.password_digest,
        name: req.body.name,
        address_field: req.body.address_field,
        body: req.body.body,
        telephone_number: req.body.telephone_number,
        employee_id_number: parseInt(req.body.employee_id_number),
        id: parseInt(req.params.id)
      }
    )
      .then(() => {
        res.status(200).json({
          status: "success",
          message: "updated single vendor"
        });
      })
      .catch(err => {
        return next(err);
      });
}



const deleteVendor = (req,res,next) => {
    let vendorId = parseInt(req.params.id)
        db.result("DELETE FROM vendors WHERE id=$1", vendorId)
        .then(result => {
            res.status(200).json({
                status: "success",
                message: "removed a vendor",
                result: result
            })
        })
        .catch(err => next(err));

}





module.exports = {
  getAllVendors,
  getOneVendorById,
  createVendor,
  updateVendor,
  deleteVendor
};
