const {db} = require('../index.js')

const authHelpers = require("../../auth/helpers");

getAllClients = (req,res,next) => {
    db.any('SELECT * FROM clients')
    .then(clients => {
        res.status(200).json({
            status: "success",
            clients: clients,
            message: "recieved all clients"
        })
    })
    .catch(err => {
        return next(err)
    })
}

getSingleClientById = (req,res,next) => {
    let clientId = parseInt(req.params.id)
    db.one('SELECT * FROM clients WHERE id=$1', [clientId])
    .then(client => {
        res.status(200).json({
            status: "sucess",
            client: client,
            message: "recieved single client"
        })
    })
    .catch(err => {
        return next(err)
    })
}

createNewClient = (req,res,next) => {
  const hash = authHelpers.createHash(req.body.password_digest);
    db.one(
        'INSERT INTO clients (email, password_digest, name, address_field, client_certificate) VALUES (${email}, ${password_digest}, ${name}, ${address_field}, ${client_certificate}) RETURNING name', {
            email: req.body.email,
            password_digest: hash,
            name: req.body.name,
            address_field: req.body.address_field,
            client_certificate: req.body.client_certificate
        }
    ).then(() => {
        res.status(200).json({
            message: "Client Has Been Added"
        })
    })
    .catch(err => {
      console.log(err);
        return next(err)
    })
}

function logoutClient(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}
//changing this for a diff method
function loginClient(req, res) {
  res.json(req.user)
  // ).catch(err => {
  //   console.log(err)
  // })
}

function isLoggedIn(req, res) {
  console.log(req.user, "isLoggedIn req.user");
  if (req.user) {
    console.log(req.user, "req.user")
    res.json({ email: req.user });
  } else {
    console.log(req.user, "ELSE req.user")
    res.json({ email: null });
  }
}



updateClient = (req,res,next) => {
    db.one(
      "UPDATE clients SET email=${email}, password_digest=${password_digest}, name=${name}, address_field=${address_field}, client_certificate=${client_certificate}",
      {
          email: req.body.email,
          password_digest: req.body.password_digest,
          name: req.body.name,
          address_field: req.body.address_field,
          client_certificate: req.body.client_certificate
      }

    )
    .then(()=> {
        res.status(200).json({
            status: "success",
            message: "updated single client"
        })
    })
    .catch(err => {
        return next(err)
    })

}

deleteClient = (req,res,next) => {
    let clientId = parseInt(req.params.id)
    db.result("DELETE FROM clients WHERE id=$1", vendorId)
    .then(result => {
        res.status(200).json({
            status: "success",
            message: "removed a client",
            result: result
        })
    })
    .catch(err => next(err))
}


module.exports = {
  getAllClients,
  getSingleClientById,
  createNewClient,
  updateClient,
  deleteClient,
  logoutClient,
  loginClient,
  isLoggedIn

};
