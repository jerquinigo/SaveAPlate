var express = require("express");
var router = express.Router();
const {
  getAllFavorites,
  getAllFavoritesByUserName,
  createFavorite,
  deleteFavorite
} = require("../db/queries/favoriteQueries.js");

router.get("/", getAllFavorites);
router.get("/:name", getAllFavoritesByUserName);
router.post("/", createFavorite);
router.delete("/:id", deleteFavorite);

module.exports = router;
