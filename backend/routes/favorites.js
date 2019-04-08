var express = require("express");
var router = express.Router();
const {
  getAllFavorites,
  getAllFavoritesById,
  createFavorite,
  deleteFavorite
} = require("../db/queries/favoriteQueries.js");


router.get('/', getAllFavorites);
router.get('/:id', getAllFavoritesById);
router.post('/', createFavorite);
router.delete('/:id', deleteFavorite);



module.exports = router;
