var express = require("express");
var router = express.Router();
const {
  getAllClientFavorites,
  getAllFavoritesById,
  createFavorite,
  deleteFavorite
} = require("../db/queries/favoriteQueries.js");

router.get("/", getAllClientFavorites);
router.get("/:id", getAllFavoritesById);
router.post("/", createFavorite);
router.delete("/:id", deleteFavorite);

module.exports = router;
