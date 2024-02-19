const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    itemName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }
})

const AllData = mongoose.model("Alldata",dataSchema)

module.exports = AllData