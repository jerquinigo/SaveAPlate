const {db} = require('../index.js')

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
    db.one(
        'INSERT INTO clients (email, password_digest, name, address_field, client_certificate) VALUES (${email}, ${password_digest}, ${name}, ${address_field}, ${client_certificate}) RETURNING name', {
            email: req.body.email,
            password_digest: req.body.password_digest,
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
        return next(err)
    })
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
  deleteClient
};
