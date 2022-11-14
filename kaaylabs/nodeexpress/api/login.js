const express= require ("express");

const User=require("../models/user");
const dbConfig= require('../config/config.json')
const jwt=require("jsonwebtoken");
const { response } = require("express");
const router=express.Router();
router.post("/login",async (req,res)=>{
    const{email,password}=req.body;
    const userWithEmail=await User.findOne({where:{admin:1}}).catch((err)=>{
        console.log("Error",err);
    })
    const adminUser=await User.findOne({where:{admin:0}}).catch((err)=>{
        console.log("Error",err);
    })
    console.log(adminUser)
    // if(userWithEmail)
    // return res.json({message:"Email or password does not matchs"});
   
    // if(adminUser.password !== password)
    //     return res.json({message:"Email or password does not match"})
   
       
           
    const jwtToken=jwt.sign({id:adminUser.id,email:adminUser.email}, dbConfig.development.JWT_SECRET);

           if(adminUser)
           
            return   res.json({message:"welcome back",token:jwtToken});
            if(userWithEmail)
            return res.json({message:"adminUser"})

        
      
     
    
})
module.exports=router;