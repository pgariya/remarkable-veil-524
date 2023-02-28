const jwt = require("jsonwebtoken")
require("dotenv").config()
async function adminValidator(req,res,next){


    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {

        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })

        if(decoded){
            if(decoded.role=="admin"||decoded.role=="superadmin"){
                
                next()
            }else{
                res.send({
                    message:"Operation not authorised,Please contact admin",
                    status:0,
                    error:true
                })
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
    adminValidator
}