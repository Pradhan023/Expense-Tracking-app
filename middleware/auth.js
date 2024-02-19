const jwt = require('jsonwebtoken')

const validateAuth = (req,res,next)=>{
    let token 
    let authheader = req.headers.Authorization || req.headers.authorization
    // console.log(authheader);
    if(authheader && authheader.startsWith("Bearer")){
        token = authheader.split(" ")[1]
        // console.log(token);
        jwt.verify(token,process.env.Secret_Key,(err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error("User is not authorized")
            }
            req.user = decoded.user; 
            // console.log(decoded.user);   //so we r setting the user body with decoded vale of user
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing")
        }
    }
}

module.exports = validateAuth