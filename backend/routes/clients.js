var express = require("express");
var router = express.Router();
const {
  getAllClients,
  getSingleClientById,
  createNewClient,
  updateClient,
  deleteClient
} = require("../db/queries/clientQueries.js");


router.get("/", getAllClients);
router.get("/:id", getSingleClientById);
router.post("/", createNewClient);
router.patch("/:id", updateClient);
router.delete("/:id", deleteClient);


module.exports = router
