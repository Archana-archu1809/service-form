const express= require ("express");
const registerApi=require("./register")
const loginApi=require("./login")
const adminApi=require("./admin")
const adminSide=require("./adminSide")
const usersApi=require("./data");
const viewApi=require("./user");
const data=require("./view")
const router=express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(adminApi);
router.use(adminSide);
router.use(usersApi);
router.use(viewApi);
router.use(data);
module.exports=router