const { db } = require("../index.js");

getAllFavorites = (req, res, next) => {
  db.any(
    "SELECT DISTINCT users.id AS client_id, users.email, users.password_digest, users.type, users.address_field AS address, users.telephone_number AS telephone, users.client_certificate AS certificate FROM favorites JOIN users ON favorites.client_id = users.id ORDER BY client_id"
  )
    .then(favorites => {
      res.status(200).json({
        status: "success",
        favorites: favorites,
        message: "received all favorites"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getAllFavoritesWithVendorName = (req, res, next) => {
  db.any("");
};

getAllFavoritesByUserId = (req, res, next) => {
  const favoritesId = parseInt(req.params.id);
  db.any(
    "SELECT DISTINCT users.id AS client_id, users.email, users.password_digest, users.type, users.address_field AS address, users.telephone_number AS telephone, users.client_certificate AS certificate FROM favorites JOIN users ON favorites.client_id = users.id WHERE favorites.client_id = $1 ORDER BY client_id",
    [favoritesId]
  )
    .then(favorites => {
      res.status(200).json({
        status: "success",
        favorites: favorites,
        message: "received all favorites by id"
      });
    })
    .catch(err => {
      return next(err);
    });
};

createFavorite = (req, res, next) => {
  db.one(
    "INSERT INTO favorites(client_id, vendor_id) VALUES(${client_id}, ${vendor_id}) RETURNING vendor_id",
    {
      client_id: req.body.client_id,
      vendor_id: req.body.vendor_id
    }
  )
    .then(favorite => {
      res.status(200).json({
        status: "success",
        favorite: favorite,
        message: "created favorite"
      });
    })
    .catch(err => {
      return next(err);
    });
};

deleteFavorite = (req, res, next) => {
  const favoriteId = parseInt(req.params.id);
  db.result("DELETE FROM favorites WHERE id=$1", favoriteId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "removed a favorite",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllFavorites,
  getAllFavoritesByUserId,
  createFavorite,
  deleteFavorite
};
