const express= require ("express");
const router=express.Router();
const User=require("../models/user");
const Resume=require("../models/index")
router.post("/register",async (req,res)=>{
    const {name,email,password,gender,experience,skills,sslc,sslcpercentage,hsc,hscpercentage,ug,ugpercentage,pg,pgpercentage,address}=req.body;
    const alreadyUser=await Resume.findOne({where:{email}}).catch((err)=>{
        console.log("Error" ,err)
    });
    if(alreadyUser){
        return res.json({message:"user already exists"})
    }
    const newUser=new Resume({name,email,password,gender,experience,skills,sslc,sslcpercentage,hsc,hscpercentage,ug,ugpercentage,pg,pgpercentage,address});

 const savedUser=  await newUser.save().catch((err)=>{
        console.log("Error", err);
        res.json({message:"cannot register at the moment"})
    })
 if(savedUser)   res.json({message:"thanks for registering"})
})

module.exports=router;