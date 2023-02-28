const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    sizes: { type: String, required: true },
    category: { type: String, required: true },
    style: { type: String },
    color: { type: String, required: true },
    material: { type: String },
    fit: { type: String },
    occasion: { type: String },
    sleeves: { type: String },
    neck: { type: String },
    brand: { type: String, required: true },
    gender: { type: String, required: true },
    delivery: { type: Number, required: true },
    adminId: { type: String, required: true },
    quantity: { type: Number, required: true },
    user: { type: String, required: true },
    pid: { type: String, required: true },
    stock:{type: Number, required: true},
    tags: { type: String },
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("/cart", cartSchema);

module.exports = {
  CartModel,
};
