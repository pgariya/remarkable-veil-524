const express = require("express")
const jwt = require("jsonwebtoken")
const { cartNorderValidator } = require("../middlewares/cart&orderValidator")
const { CartModel } = require("../models/CartModel")
const cartRouter = express.Router()
require("dotenv").config()



cartRouter.get("/",(req,res)=>{
    let token = req.headers.authorization
    let page = req.query.page||0
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        let {userId:user} = decoded
        try {
            let count = await CartModel.find({user}).countDocuments()
            let data = await CartModel.find({user}).skip(page*5).limit(5)
            res.send({
                message:"All cart data",
                status:1,
                count:count,
                data:data,
                error:false
            })
        } catch (error) {
            
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })

        }
     
      });



})



cartRouter.get("/:pid",(req,res)=>{
    let token = req.headers.authorization
    let {pid} = req.params
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        let {userId:user} = decoded
        try {
            let data = await CartModel.find({user,pid})
            if(data.length>0){
                res.send({
                    message:"Item already in cart",
                    status:1,
                    error:false
                })
            }else{
                res.send({
                    message:"Item not present in cart",
                    status:0,
                    error:true
                })
                
            }
           
        } catch (error) {
            
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })

        }
     
      });



})



cartRouter.patch("/:id",async(req,res)=>{
    let {id:_id} = req.params
    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async(err,decoded)=>{
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        try {
            let {userId:user}=decoded
            console.log("quantiyt",req.body,_id,user)
            await CartModel.updateOne({_id,user},req.body)
            res.send({
                message:"Item updated",
                status:1,
                error:false
            })
    
        } catch (error) {
    
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })
            
        }

    })

    
   
   
  });


  
cartRouter.delete("/:id",async(req,res)=>{
    let {id:_id} = req.params
    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async(err,decoded)=>{
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        try {
            let {userId:user}=decoded
            await CartModel.deleteOne({_id,user})
            res.send({
                message:"Item deleted",
                status:1,
                error:false
            })
    
        } catch (error) {
    
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })
            
        }

    })

  });



cartRouter.use(cartNorderValidator)



cartRouter.post("/",async(req,res)=>{

    try {
       
        await CartModel.insertMany(req.body)
        res.send({
            message:"Item added in cart",
            status:1,
            error:false
        })
    } catch (error) {
        
        res.send({
            message:"Something went wrong: "+error.message,
            status:0,
            error:true
        })

    }
   
       
     
      });

      
      


module.exports={
    cartRouter
}