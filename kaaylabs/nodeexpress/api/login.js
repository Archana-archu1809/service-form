const express= require ("express");

const dbConfig= require('../config/config.json')
const jwt=require("jsonwebtoken");
const User=require("../models/registers")
const router=express.Router();


router.post("/login",async (req,res)=>{
    const{email,password}=req.body;
    const userWithEmail=await User.findOne({where:{email}}).catch((err)=>{
        console.log("Error",err);
    })
   
    if(!userWithEmail)
    return res.json({message:"Email or password does not match"});
    if(userWithEmail.password !== password)
        return res.json({message:"Email or password does not match"})
        const jwtToken=jwt.sign({id:userWithEmail.id,email:userWithEmail.email}, dbConfig.development.JWT_SECRET);
     return   res.json({message:"welcome back",token:jwtToken, auth:true, email:userWithEmail.email,id:userWithEmail.id})

})



module.exports=router;