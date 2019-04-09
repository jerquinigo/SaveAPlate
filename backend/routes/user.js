var express = require("express");
var router = express.Router();
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");
const {
getAllUsers,
getAllVendors,
getAllClients,
updateUser,
deleteUser
} = require("../db/queries/usersQueries.js");

router.get('/', getAllUsers)
router.get('/vendors', getAllVendors)
router.get('/clients', getAllClients)
router.post('/new', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
