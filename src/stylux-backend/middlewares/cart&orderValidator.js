const jwt = require("jsonwebtoken")
require("dotenv").config()
async function cartNorderValidator(req,res,next){


    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {

        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })

        if(decoded){
            req.body.forEach(el => {
                el.user = decoded.userId

            });
            next()


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
    cartNorderValidator
}