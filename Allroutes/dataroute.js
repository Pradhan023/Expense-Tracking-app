const {createDataController,getDataController,deletedataController} = require('../controller/databundler');
const validateAuth = require('../middleware/auth');

const dataroute = require('express').Router();
dataroute.use(validateAuth)

dataroute.post("/createdata",createDataController);

dataroute.get("/getdata",getDataController)

dataroute.post("/delete",deletedataController)

module.exports = dataroute