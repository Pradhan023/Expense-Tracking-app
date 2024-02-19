const {registrationController,loginController } = require("../controller/authentication");

const route = require('express').Router();

route.get("/",(req,res)=>{
    res.send("working")
})

route.post("/register",registrationController)

route.post("/login",loginController)



module.exports = route