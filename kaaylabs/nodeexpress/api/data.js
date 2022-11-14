const express= require ("express");
const router=express.Router();
const User=require("../models/user");

 router.get("/datas",async(req,res)=>{
    // var findUserDevice = function(id){
    //     // return the promise itself
    //     return User.find({
    //         where: {
    //            id: id
    //         }
    //      }).then(function(device) {
    //         if (!device) {
    //             return 'not find';
    //         }
    //         return device.dataValues;
    //      });
    // };
    // findUserDevice(req.body.id).then( function(UserDevice) {
    //     console.log(UserDevice);
    //  });
         const project = await User.findByPk(2);
if (project === null) {
  console.log('Not found!');
} else {
    return res.send ({message:project})
  console.log(project instanceof User); }// true
  // Its primary key is 123

 })
    
module.exports=router


