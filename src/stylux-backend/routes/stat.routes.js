const express = require("express")
const { adminValidator } = require("../middlewares/adminValidator")
const { OrderModel } = require("../models/OrderModel")
const { ProductModel } = require("../models/ProductModel")

const statRouter = express.Router()
statRouter.use(adminValidator)
statRouter.get("/order",async(req,res)=>{

    let {request,adminId} = req.query

    try {
        let count;
        if(request=="totalorder"){
            count = await OrderModel.countDocuments({adminId:adminId})

        }else if(request=="pendingorder"){
            count = await OrderModel.countDocuments({adminId:adminId, $or: [ { status: req.query.status1 }, { status: req.query.status2 } ] })
        }else if(request=="totalearning"){
           count = await OrderModel.aggregate([
            {
              $match: {
                adminId: adminId,
                status:"delivered"
              }
            },
            {
              $group: {
                _id: null,
                total: { $sum: { $multiply: ["$price", "$quantity"] } }
              }
            }
          ])
          

          count = count.length > 0 ? count[0].total : 0;
              
        }
      



        res.send({
            message:"All Order stats",
            status:1,
            error:false,
            count:count
        })
    } catch (error) {
        res.send({
            message:"Something wend wrong: "+error.message,
            status:0,
            error:true
        })
        
    }

})

statRouter.get("/product",async(req,res)=>{
    
    let {request,adminId} = req.query


    try {
        let count;
        if(request=="totalproduct"){
           count = await ProductModel.countDocuments({adminId:adminId})

        }else if(request=="outofstock"){
            count = await ProductModel.countDocuments({adminId:adminId,stock:0})
        }else if(request=="categorycount"){
            count = await ProductModel.countDocuments({adminId:adminId,category:req.query.category})
        }

        res.send({
            message:"All Product stats",
            status:1,
            error:false,
            count:count
        })
    } catch (error) {
        res.send({
            message:"Something wend wrong: "+error.message,
            status:0,
            error:true
        })
        
    }

})



module.exports={
    statRouter
}