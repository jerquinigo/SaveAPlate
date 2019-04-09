var express = require("express");
var router = express.Router();

const {
getAllUsers,
getAllVendors,
getAllClients,
updateUser,
deleteUser,
getSingleUser,
} = require("../db/queries/usersQueries.js");




router.get('/', getAllUsers)
router.get('/vendors', getAllVendors)
router.get('/clients', getAllClients)
router.get('/:id', getSingleUser)
router.post('/new', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router
