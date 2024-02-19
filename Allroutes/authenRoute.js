const {registrationController,loginController } = require("../controller/authentication");

const route = require('express').Router();

route.post("/register",registrationController)

route.post("/login",loginController)



module.exports = route