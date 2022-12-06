const express= require ("express");
const Resume = require("../models/index");
const router=express.Router();
const User=require("../models/user");


 router.get("/datas/:id",  async(req,res)=>{
    


  Resume.findByPk(req.params.id).then((result)=>{
    res.status(200).json({
      data:result
    })
  }).catch((err)=>{
    console.log(err)
  })

 })
 
module.exports=router

    


