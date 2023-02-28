const jwt = require("jsonwebtoken")
require("dotenv").config()
async function authenticator(req,res,next){


    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {

        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })

        if(decoded){
            console.log(decoded)
            if(decoded.role=="deactivate"){
                res.send({
                    message:"Your Account is deactivated : Conatact SuperAdmin",
                    status:0,
                    error:true
                })
            }else{
                next()
            }


        }else{
            res.send({
                message:"Invalid token , Please Login",
                status:2,
                error:true
            })
        }
     
      });


}

module.exports={
    authenticator
}