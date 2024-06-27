var express = require('express');
var router = express.Router();
var User = require('../models/users');
var { createUser, getUsers } = require('../controllers/users');

// Route to create a new user
router.post('/', createUser);

// Route to get all users
router.get('/', getUsers);

module.exports = router;
