const express= require ("express");
const router=express.Router();
const User=require("../models/user");
router.post("/register",async (req,res)=>{
    const {name,email,password,gender,experience,technology,rating}=req.body;
    const alreadyUser=await User.findOne({where:{email}}).catch((err)=>{
        console.log("Error" ,err)
    });
    if(alreadyUser){
        return res.json({message:"user already exists"})
    }
    const newUser=new User({name,email,password,gender,experience,technology,rating});

 const savedUser=  await newUser.save().catch((err)=>{
        console.log("Error", err);
        res.json({message:"cannot register at the moment"})
    })
 if(savedUser)   res.json({message:"thanks for registering"})
})

module.exports=router;