require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./Allroutes/authenRoute')
const dataroute =require('./Allroutes/dataroute')

// config
const connection = require('./config/config')

// middleware
app.use(cors());
app.use(express.json())
app.use(route)
app.use(dataroute)
const Port = 5000 || process.env.Port 

app.listen(Port,async()=>{
    try{
        await connection()
        console.log("Port is live on Port :" ,Port);
    }
    catch(err){
        console.log("Server error ",err);
    }
})