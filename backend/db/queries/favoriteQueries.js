const {db} = require('../index.js')


getAllFavorites = (req,res,next) => {
  db.any("SELECT clients.id AS clientId, clients.email, clients.name, clients.address_field AS clientAddress, clients.client_certificate AS client_cert, vendors.id AS vendorId, vendors.email, vendors.name AS vendor_name, vendors.address_field AS vendor_address, vendors.body AS vendor_description, vendors.telephone_number, employee_id_number AS ein FROM favorites JOIN clients ON clients.id=favorites.client_id JOIN vendors ON vendors.id=favorites.vendor_id")
  .then(favorites => {
    res.status(200).json({
      status: "success",
      favorites: favorites,
      message: "recieved all favorites"
    })
  })
  .catch(err => {
    return next(err)
  })
}

getAllFavoritesById = (req,res,next) => {
  let favoritesId = parseInt(req.params.id)
  db.any("SELECT clients.id AS clientId, clients.email, clients.name, clients.address_field AS clientAddress, clients.client_certificate AS client_cert, vendors.id AS vendorId, vendors.email, vendors.name AS vendor_name, vendors.address_field AS vendor_address, vendors.body AS vendor_description, vendors.telephone_number, employee_id_number AS ein FROM favorites JOIN clients ON clients.id=favorites.client_id JOIN vendors ON vendors.id=favorites.vendor_id WHERE favorites.vendor_id=$1", [favoritesId])
  .then(favorites => {
    res.status(200).json({
      status: "success",
      favorites: favorites,
      message: "recieved all favorites by id"
    })
  })
  .catch(err => {
    return next(err)
  })
}

createFavorite = (req,res,next) => {
  db.one("INSERT INTO favorites(client_id, vendor_id) VALUES(${client_id}, ${vendor_id}) RETURNING vendor_id",
  {
    client_id: req.body.client_id,
    vendor_id: req.body.vendor_id
  }
)
.then(favorite => {
  res.status(200).json({
    status: "success",
    favorite:favorite,
    message: "created favorite"
  })
})
.catch(err => {
  return next(err)
})
}



deleteFavorite = (req,res,next) => {
  let favoriteId = parseInt(req.params.id)
  db.result("DELETE FROM favorites WHERE id=$1", favoriteId)
  .then(result => {
    res.status(200).json({
      status: "success",
      message: "removed a favorite",
      result: result
    })
  })
  .catch(err => {
    return next(err)
  })
}






module.exports = {
  getAllFavorites,
  getAllFavoritesById,
  createFavorite,
  deleteFavorite
}
