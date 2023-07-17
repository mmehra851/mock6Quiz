const express = require("express")
const {userModel} = require("../Model/userModel")
require("dotenv").config()
const userRouter = express.Router()

userRouter.use(express.json())

userRouter.post("/login",async(req,res)=>{
    try {
    //   console.log(req.body);
        let user = await userModel.findOne({ email: req.body.email })

    //    console.log(user);

        if (user) {

         res.send({error : true , message : "User is already registered user can proceed"})

        } else if(!user) {

          const newuser = new userModel(req.body);

          console.log(newuser);

          await newuser.save();

          res.send( {message:"User Registered successfully", error:false})

        }
      } catch (error) {

        res.send({ error: error.message })
      }
})

module.exports = {
    userRouter
}