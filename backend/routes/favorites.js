var express = require("express");
var router = express.Router();
const {
  getAllFavorites,
  getAllFavoritesByUserName,
  getAllFavoritesForClient,
  createFavorite,
  deleteFavorite
} = require("../db/queries/favoriteQueries.js");

router.get("/", getAllFavorites);
router.get("/:name", getAllFavoritesByUserName);
router.get("/client/:name", getAllFavoritesForClient)
router.post("/", createFavorite);
router.delete("/:id", deleteFavorite);

module.exports = router;
