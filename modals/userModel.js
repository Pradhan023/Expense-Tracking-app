const mongoose = require("mongoose")

const registerSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Add username"]
    },
    email:{
        type:String,
        required:[true,"Add Email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Add username"]
    }
},{timestamps:true}
)

const UserReg = mongoose.model("User",registerSchema)

module.exports = UserReg