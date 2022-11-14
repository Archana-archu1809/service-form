const express= require ("express");
const router=express.Router();
const dbConfig= require('../config/config.json')
const jwt=require("jsonwebtoken");
const User=require("../models/user");
router.post("/admin",async(req,res)=>{
    const {email,password}=req.body;
    const adminUser=await User.findOne({where:{admin:0},email}).catch((err)=>{
        console.log("Error",err);
    })
    if(!adminUser)
    return res.json({message:"user"});
    // if(adminUser.password !== password)
    //     return res.json({message:"Email or password does not match"})
        const jwtToken=jwt.sign({id:adminUser.id,email:adminUser.email}, dbConfig.development.JWT_SECRET);
     return   res.json({message:"welcome back",token:jwtToken})



})
module.exports=router;