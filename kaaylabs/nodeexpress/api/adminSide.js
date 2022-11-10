const express= require ("express");
const router=express.Router();
const User=require("../models/user");
router.get("/data",async(req,res)=>{
    const admin=await User.findAll();
    if(admin){
        return res.json(admin)
    }else{
        return res.json({message:"error"})
    }

})
module.exports=router

