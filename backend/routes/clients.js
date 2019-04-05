var express = require("express");
var router = express.Router();
const {getAllClients, getSingleCLientById, createNewClient, updateClient, deleteClient} = require("../db/queries/vendorQueries.js");



module.exports = router
