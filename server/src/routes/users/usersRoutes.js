const express = require('express');
const UserRouter = express.Router();
const addUser = require('../../controllers/Users/UsersCTRL');

// Route to add a new user
UserRouter.post('/', addUser);

module.exports = UserRouter;