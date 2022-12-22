const express= require ("express");
const router=express.Router();
const User=require("../models/user");
const Resume=require("../models/index");
const Register=require("../models/registers")
router.post("/register", async(req,res)=>{
    const {name,email,password,phonenumber,workstatus,resume,checkbox}=req.body;
    const alreadyUser=await Register.findOne({where:{email}}).catch((err)=>{
                console.log("Error" ,err)
            });
            if(alreadyUser){
                return res.json({message:"user already exists"})
            }
    const newUser=new Register({name,email,password,phonenumber,workstatus,resume,checkbox});
    const saveUser=await newUser.save().catch((err)=>{
        console.log("Error",err);
        res.json({message:"cannot register at that moment"})

    });
    if(saveUser)
    res.json({message:"thanks for registering"})
})

module.exports=router;