const express= require ("express");
const router=express.Router();
const User=require("../models/user");
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
function localstorage (next){
  localStorage.getItem('jwt');
  
}
 router.get("/datas/:id",  async(req,res)=>{
    

  console.log(req.params.id);
  User.findByPk(req.params.id).then((result)=>{
    res.status(200).json({
      student:result
    })
  }).catch((err)=>{
    console.log(err)
  })

 })
 
module.exports=router

    


