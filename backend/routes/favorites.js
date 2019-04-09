var express = require("express");
var router = express.Router();
const {
  getAllFavorites,
  getAllFavoritesByUserId,
  createFavorite,
  deleteFavorite
} = require("../db/queries/favoriteQueries.js");

router.get("/", getAllFavorites);
router.get("/:id", getAllFavoritesByUserId);
router.post("/", createFavorite);
router.delete("/:id", deleteFavorite);

module.exports = router;
