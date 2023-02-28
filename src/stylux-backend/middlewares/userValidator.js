const { UserModel } = require("../models/UserModel")

async function userValidator(req,res,next){

    console.log(req.body)

    let {email,phone} = req.body
    if(email){
        try {
            let data = await UserModel.find({email})
            if(data.length>0){
                res.send({
                    message:"User already exist",
                    status:0,
                    error:true
                })
            }else{
                req.body.role="user"
                next()
            }
            
        } catch (error) {
            res.send({
                message:"Somthing went wrong"+error.message,
                status:0,
                error:true
            })
            
        }

    }else{

        try {
            let data = await UserModel.find({phone})
            if(data.length>0){
                res.send({
                    message:"User already exist",
                    status:0,
                    error:true
                })
            }else{
                req.body.role="user"
                next()
            }
            
        } catch (error) {
            res.send({
                message:"Somthing went wrong"+error.message,
                status:0,
                error:true
            })
            
        }

    }



}


module.exports={
    userValidator
}