const mongoose = require("mongoose")


const orderSchema = mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    originalPrice: { type: Number, required: true },
    sizes:{type:String,required:true},
    category:{type:String,required:true},
    style:{type:String},
    color:{type:String,required:true},
    material: { type: String},
    fit: { type: String },
    occasion: { type: String},
    sleeves: { type: String },
    neck: { type: String, },
    brand:{type:String,required:true},
    gender:{type:String,required:true},
    quantity:{type:Number,required:true},
    user:{type:String,required:true},
    status:{type:String,required:true},
    orderDate:{type:String,required:true},
    address:{type:String,required:true},
    pid:{type:String,required:true},
    delivery:{ type: Number, required: true },
    adminId:{type: String, required: true},
    tags:{type: String},
    stock:{type: Number, required: true},
    totalDiscountPrice:{type:Number,required:true}

    

},{
    versionKey:false
})


const OrderModel = mongoose.model("/order",orderSchema)

module.exports={
    OrderModel
}