const express = require('express');
const UsersController = require('../controllers/usersController');

const usersRouter = express.Router();

const usersController = new UsersController();


usersRouter.get("/signin", usersController.checkUser);

usersRouter.post("/", usersController.addUser);

usersRouter.get("/:userId", usersController.getDetails)

usersRouter.put("/:userId", usersController.updateUser);


module.exports = usersRouter;