const express= require ("express");
const resumeData=require("../models/datas")
const router=express.Router();
router.get("/datass/:UserId",async(req,res)=>{
    const UserId=req.params.UserId;
    const data=await resumeData.findAll({where:{UserId:UserId}});
    res.json(data);
});
module.exports=router;