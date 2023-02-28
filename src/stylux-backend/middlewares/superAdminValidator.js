const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
require("dotenv").config()
async function superAdminValidator(req,res,next){


    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {

        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })

        if(decoded){
            if(decoded.role=="superadmin"){
                let {id} = req.params
                try {
                    let data = await UserModel.find({email:id})
                    if(data.length>0){
                        req.headers.userId = decoded.userId
                        next()

                    }else{
    
                        res.send({
                            message:"No user found with this email",
                            status:0,
                            error:true
                        })
                    }
                } catch (error) {

                    res.send({
                        message:"Something went wrong: "+err,
                        status:0,
                        error:true
                    })
                    
                }
                
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
    superAdminValidator
}