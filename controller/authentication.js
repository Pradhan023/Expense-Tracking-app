const UserReg = require('../modals/userModel')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const registrationController = async(req,res)=>{
    const Data = req.body;
    console.log(Data);
    const {username,email,password} = Data
    console.log(!username);
 

    if(!username || !email || !password){
        return res.status(400).json({msg:"All field is mendatory"})
    }

    const Details = await UserReg.findOne({email:Data.email})
    // console.log(Details);

    if(!Details){
        const hashpassword = bcrypt.hashSync(Data.password,10)
        const obj = {...Data,password:hashpassword}
        console.log(obj);
        await UserReg.create(obj)
        return res.status(201).json({msg:"Registered Successfully"});
    }
    return res.status(200).json({msg:"User already registered"})
}

const loginController = async(req,res)=>{
    const {email,password} = req.body;
    console.log(email);

    if(!email || !password){
        return res.status(400).json({msg:"All field is mendatory"})
    }

    const Details = await UserReg.findOne({email:email})
    // console.log(Details.username);

    if(Details && (bcrypt.compare(password,Details.password))){
        const acsessToken = jwt.sign({
            user:{
                username:Details.username,
                email:Details.email,
                id:Details.id
            },
        }, process.env.Secret_Key , {expiresIn:"7d"}
        )

        return res.status(200).json({msg:"successfully loged in",user:{
            accessToken:acsessToken,
            username:Details.username
        }})
    }
    else{
        return res.status(201).json({msg:"email or password is wrong"})
    }
}

module.exports = {registrationController,loginController}