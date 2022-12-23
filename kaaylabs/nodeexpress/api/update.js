const express= require ("express");
const resumeData=require("../models/datas")
const router=express.Router();
router.put("/update/:id",async(req,res)=>{
    const id=req.params.id;

await  resumeData.update(req.body,{
    where:{id:id}
})
.then(num => {
    if (num == 1) {
      res.send({
        message: "Tutorial was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  })
 .catch(err=>{
    res.send({err})
 })
});
module.exports=router;