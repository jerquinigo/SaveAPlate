const {db} = require('../index.js')

const authHelpers = require("../../auth/helpers");

getAllUsers = (req,res,next) => {
  db.any('SELECT * FROM users')
    .then(users => {
      res.status(200).json({
      status: "success",
      users: users,
      message: "you have recieved all the users"
    })
 })
    .catch(err => {
      console.log(err);
        return next(err)
    })
}

getAllVendors = (req,res,next) => {
  let isVendor = 1
  db.any('SELECT * FROM users WHERE type=$1', [isVendor])
    .then(vendors => {
      res.status(200).json({
      status: "success",
      vendors: vendors,
      message: "you have recieved all the vendors"
    })
 })
    .catch(err => {
      console.log(err);
        return next(err)
    })
}

getAllClients = (req,res,next) => {
  let isClient = 2
  db.any('SELECT * FROM users WHERE type=$1', [isClient])
    .then(clients => {
      res.status(200).json({
      status: "success",
      clients: clients,
      message: "you have recieved all the clients"
    })
 })
    .catch(err => {
      console.log(err);
        return next(err)
    })
}

createUser = (req,res,next) => {
  const hash = authHelpers.createHash(req.body.password_digest);
  db.one('INSERT INTO users(name,email,password_digest,type,address_field,body,telephone_number,ein,client_certificate) VALUES(${name},${email},${password_digest},${type},${address_field},${body},${telephone_number},${ein},${client_certificate}) RETURNING name', {
  name : req.body.name,
  email : req.body.email,
  password_digest : hash,
  type: req.body.type,
  address_field:req.body.address_field,
  body:req.body.body || null,
  telephone_number:req.body.telephone_number || null,
  ein:req.body.ein || null,
  client_certificate:req.body.client_certificate || null
})
.then(() => {
  res.status(200).json({
  status: "success",
  message: "you have added a user"
})
})
.catch(err => {
  console.log(err);
    return next(err)
})
}

updateUser = (req,res,next) => {
  const hash = authHelpers.createHash(req.body.password_digest);
  let user_id = Number(req.params.id)
  db.none('UPDATE users SET name=${name}, email=${email}, password_digest=${password_digest}, address_field=${address_field}, body=${body}, telephone_number=${telephone_number}, ein=${ein}, client_certificate=${client_certificate} WHERE id=${id}',  {
    id: user_id,
    name : req.body.name,
    email : req.body.email,
    password_digest : hash,
    address_field:req.body.address_field,
    body:req.body.body || null,
    telephone_number:req.body.telephone_number || null,
    ein:req.body.ein || null,
    client_certificate:req.body.client_certificate || null
  })
  .then(() => {
    res.status(200).json({
    status: "success",
    message: "you have updated your user"
  })
  })
  .catch(err => {
    console.log(err);
      return next(err)
  })
}

deleteUser = (req,res,next) => {
  let user_id = Number(req.params.id)
  db.result('DELETE FROM users WHERE id=$1', [user_id])
  .then(() => {
    res.status(200).json({
    status: "success",
    message: "you have deleted your user"
  })
  })
  .catch(err => {
    console.log(err);
      return next(err)
  })
}

getSingleUser = (req,res,next) => {
  let user_id = Number(req.params.id)
  db.any('SELECT * FROM users WHERE id=$1', [user_id])
    .then(user => {
      res.status(200).json({
      status: "success",
      data: user,
      message: "you have a single user"
    })
  })
  .catch(err => {
    console.log(err);
      return next(err)
  })
}

module.exports= {
  getAllUsers,
  getAllVendors,
  getAllClients,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser
}
