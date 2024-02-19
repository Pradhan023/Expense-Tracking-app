const mongoose = require('mongoose')

const connection = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected");
    }
    catch(err){
        console.log("Db connection error" , err)
    }
}

module.exports = connection