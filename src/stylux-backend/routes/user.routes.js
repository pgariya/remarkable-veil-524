const express = require("express");

const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/UserModel");
const { userValidator } = require("../middlewares/userValidator");
const jwt = require("jsonwebtoken");
const {ProductModel}  = require("../models/ProductModel")
const { CartModel } = require("../models/CartModel")
const { OrderModel } = require("../models/OrderModel")
const {authenticator} = require("../middlewares/authenticator")


const {superAdminValidator} = require("../middlewares/superAdminValidator.js")
require("dotenv").config();



userRouter.post("/login",async (req, res) => {
  let { email, password, phone } = req.body;
  if (email && password) {
    try {
      let data = await UserModel.find({ email });
      if (data.length > 0) {
        bcrypt.compare(password, data[0].password, (err, result) => {
          if (err)
            res.send({
              message: "Something went wrong",
              status: 0,
              error: true,
            });

          if (result) {
            let token = jwt.sign(
              { userId: data[0]._id, role: data[0].role },
              process.env.SecretKey
            );
            res.send({
              message: "Login successful",
              status: 1,
              name:data[0].name,
              email:data[0].email,
              token: token,
              error: false,
            });
          } else {
            res.send({
              message: "Password is incorrect",
              status: 0,
              error: true,
            });
          }
        });
      } else {
        res.send({
          message: "User does not exist , Please Sign up",
          status: 0,
          error: true,
        });
      }
    } catch (error) {
      res.send({
        message: "Something went wrong: " + error.message,
        status: 0,
        error: true,
      });
    }
  } else {
    //for phone
  }
});

userRouter.post("/register", userValidator, async (req, res) => {
  let { email, name, role, password, phone } = req.body;

  if (email && password) {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err)
        res.send({
          message: "Something went wrong: " + err,
          status: 0,
          error: true,
        });

      try {
        let user = new UserModel({ email, name, role, password: hash });
        await user.save();
        res.send({
          message: "User is regsitered",
          status: 1,
          error: false,
        });
      } catch (error) {
        res.send({
          message: "Somthing went wrong" + error.message,
          status: 0,
          error: true,
        });
      }
    });
  } else {
    try {
      let user = new UserModel({ name, role, phone });
      await user.save();
      res.send({
        message: "User is regsitered",
        status: 1,
        error: false,
      });
    } catch (error) {
      res.send({
        message: "Somthing went wrong" + err,
        status: 0,
        error: true,
      });
    }
  }
});

userRouter.patch("/superadmin/:id", superAdminValidator, async (req, res) => {
  const { id } = req.params;
  const {userId} = req.headers
  const {role} = req.body
  if(role=="delete"){
    try {
      await UserModel.deleteOne({email:id})
      await ProductModel.deleteMany({adminId:"admin"+userId})
      await CartModel.deleteMany({adminId:"admin"+userId})
      await OrderModel.deleteMany({adminId:"admin"+userId})
      res.send({
        message:"User deleted",
        status:1,
        error:false
      })
    } catch (error) {
      res.send({
        message:"User deletetion failed",
        status:0,
        error:true
      })
    }
  }else{
    try {
      await UserModel.updateOne({ email: id }, req.body);
      res.send({
        message: "Role changed",
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
  }
  
});

userRouter.get("/getuser",authenticator,async(req,res)=>{
  let token = req.headers.authorization
  jwt.verify(token,process.env.SecretKey,async(err,decoded)=>{

    if(err) res.send({
      message:"Invalid token",
      status:0,
      error:true
    })

    if(decoded){
      let {userId,role}=decoded
      try {
        if(role=="admin"||role=="superadmin"){
          let data = await UserModel.find({_id:userId})
          res.send({
            message:"Admin panel approved",
            role:role,
            userId:userId,
            name:data[0].name,
            status:1,
            error:false
          })
        }else{
          res.send({
            message:"Restricted Area",
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

    }else{
      res.send({
        message:"Invalid token",
        status:0,
        error:true
      })
    }

  })
 
})


userRouter.get("/admin", async (req, res) => {
  let {role} = req.headers
  let page = req.query.page||0


  try {
    let count  = await UserModel.find({ role}).countDocuments()
    let data = await UserModel.find({ role}).skip(page*5).limit(5);
    res.send({
      message: "All users data",
      status: 1,
      data: data,
      count:count,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong" + error.message,
      status: 0,
      error: true,
    });
  }
});

module.exports = {
  userRouter,
};
