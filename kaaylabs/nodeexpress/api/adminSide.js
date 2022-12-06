const { Op } = require("sequelize");
const express= require ("express");
const router=express.Router();
const User=require("../models/user");
const Resume = require("../models/index");
router.get("/data",async(req,res)=>{
    const admin=await Resume.findAll({where:{admin:{[Op.ne]:[1]}}});
    if(admin){
        return res.json(admin)
    }else{
        return res.json({message:"error"})
    }

})
module.exports=router

