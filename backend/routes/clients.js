var express = require("express");
var router = express.Router();
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");
const {
  getAllClients,
  getSingleClientById,
  createNewClient,
  updateClient,
  deleteClient,
  logoutClient,
  loginClient,
  isLoggedIn
} = require("../db/queries/clientQueries.js");


router.get("/", getAllClients);
router.get("/:id", getSingleClientById);
router.post("/", createNewClient);
router.patch("/:id", updateClient);
router.delete("/:id", deleteClient);
router.post("/login", passport.authenticate("local", {}), loginClient);
router.post("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutClient);


module.exports = router
