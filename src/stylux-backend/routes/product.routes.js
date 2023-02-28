const express = require("express");
const { adminValidator } = require("../middlewares/adminValidator");
const { ProductModel } = require("../models/ProductModel");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
    const page = req.query.page||0
  try {
    let count = await ProductModel.find(req.query).countDocuments();
    let data = await ProductModel.find(req.query).skip(page*10).limit(10);
    res.send({
      message: "All products data",
      count:count,
      status: 1,
      data: data,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong: " + error.message,
      status: 0,
      error: true,
    });
  }
});

productRouter.get("/:id", async (req, res) => {
  let { id: _id } = req.params;
  try {
    let data = await ProductModel.find({ _id });
    res.send({
      message: "All products data",
      status: 1,
      data: data,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong: " + error.message,
      status: 0,
      error: true,
    });
  }
});

//search route here

productRouter.use(authenticator);

productRouter.post("/", async (req, res) => {
  let token = req.headers.authorization;
  jwt.verify(token, process.env.SecretKey, async function (err, decoded) {
    if (err)
      res.send({
        message: "Something went wrong: " + err,
        status: 0,
        error: true,
      });

    req.body.forEach((el) => {
      el.adminId = "admin" + decoded.userId;
    });
    try {
      await ProductModel.insertMany(req.body);
      res.send({
        message: "Product added",
        status: 1,
        error: false,
      });
    } catch (error) {
      res.send({
        message: "Something went wrong: " + error.message,
        status: 0,
        error: true,
      });
    }
  });
});

productRouter.use(adminValidator);

productRouter.patch("/:id", async (req, res) => {
  let { id: _id } = req.params;

  try {
    await ProductModel.findByIdAndUpdate({ _id }, req.body);
    res.send({
      message: "Product updated",
      status: 1,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong: " + error.message,
      status: 0,
      error: true,
    });
  }
});

productRouter.delete("/:id", async (req, res) => {
  let { id: _id } = req.params;

  try {
    await ProductModel.findByIdAndDelete({ _id });
    res.send({
      message: "Product deleted",
      status: 1,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong: " + error.message,
      status: 0,
      error: true,
    });
  }
});

productRouter.post("/admin", async (req, res) => {
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
            let count = await ProductModel.find({adminId: "admin" + decoded.userId,...req.query }).countDocuments();
            let data = await ProductModel.find({adminId: "admin" + decoded.userId,...req.query }).skip(page*5).limit(5);
            res.send({
              message: "All products data",
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
            
            let count = await ProductModel.find({...req.query }).countDocuments();
            let data = await ProductModel.find({...req.query }).skip(page*5).limit(5);
            res.send({
              message: "All products data",
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

module.exports = {
  productRouter,
};
