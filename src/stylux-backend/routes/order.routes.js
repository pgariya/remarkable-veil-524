const express = require("express")
const jwt = require("jsonwebtoken")
const { adminValidator } = require("../middlewares/adminValidator")
const { cartNorderValidator } = require("../middlewares/cart&orderValidator")
const { CartModel } = require("../models/CartModel")
const { OrderModel } = require("../models/OrderModel")
require("dotenv").config()

const orderRouter = express.Router()


orderRouter.get("/",(req,res)=>{
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
            let count = await OrderModel.find({user}).countDocuments()
            let data = await OrderModel.find({user}).skip(page*5).limit(5)
            res.send({
                message:"All order data",
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


orderRouter.patch("/:id",async(req,res)=>{
    let {id:_id} = req.params
    
        try {
            await OrderModel.updateOne({_id},req.body)
            res.send({
                message:"Status updated",
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



  


orderRouter.post("/",cartNorderValidator,async(req,res)=>{
    let token = req.headers.authorization
    jwt.verify(token,process.env.SecretKey,async(err,decoded)=>{
        if(err) res.send({
            message:"Inavlid token: "+err,
            status:0,
            error:true
        })

        if(decoded){

            await CartModel.deleteMany({user:decoded.userId})

            try {
        
                req.body.forEach(el => {
                    el.status="ordered"
                    el.orderDate=String(Date.now())
                    
                });
                
                await OrderModel.insertMany(req.body)
                
                res.send({
                    message:"Item added in order",
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

        }else{

             
            res.send({
                message:"Invalid token: ",
                status:0,
                error:true
            })

        }

    })
   
 
 
  });
 orderRouter.use(adminValidator)   


orderRouter.post("/admin", async (req, res) => {
    const  token  = req.headers.authorization;
    const page = req.query.page
    
    jwt.verify(token, process.env.SecretKey, async (err, decoded) => {
      if (err)
        res.send({
          message: "Invalid token: " + err,
          status: 0,
          error: true,
        });
  
      if (decoded) {
       if(decoded.role=="admin"){
          try {
              let count = await OrderModel.find({adminId: "admin" + decoded.userId,...req.query }).countDocuments();
              let data = await OrderModel.find({adminId: "admin" + decoded.userId,...req.query }).skip(page*5).limit(5);
              res.send({
                message: "All Order data",
                status: 1,
                data: data,
                error: false,
                count:count
              });
            } catch (error) {
              res.send({
                message: "Something went wrong: " + error.message,
                status: 0,
                error: true,
              });
            }
       }else{
          try {
              
              let count = await OrderModel.find({...req.query }).countDocuments();
              let data = await OrderModel.find({...req.query }).skip(page*5).limit(5);
              res.send({
                message: "All Order data",
                status: 1,
                data: data,
                count:count,
                error: false,
              });
            } catch (error) {
              res.send({
                message: "Something went wrong: " + error.message,
                status: 0,
                error: true,
              });
            }
       }
      }else{
  
          res.send({
              message: "Invalid token:",
              status: 0,
              error: true,
            });
  
      }
    });
  }); 






module.exports={
    orderRouter
}