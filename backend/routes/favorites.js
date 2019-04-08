var express = require("express");
var router = express.Router();
const {
  getAllFavorites,
  getAllFavoritesById,
  createFavorite,
  updateFavorite,
  deleteFavorite
} = require("../db/queries/favoriteQueries.js");


router.get('/', getAllFavorites);
router.get('/:id', getAllFavoritesById);
router.post('/', createFavorite);
router.patch('/:id', updateFavorite);
router.delete('/:id', deleteFavorite);



module.exports = router;
