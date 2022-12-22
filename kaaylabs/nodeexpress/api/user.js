const express= require ("express");
const resumeData=require("../models/datas")
const router=express.Router();
router.post("/datass",async(req,res)=>{
    const {ResumeHeadline,skills,currentEmp,empType,cmpyName,designation,skillsUsed,joiningDate,WorkedTill,jobProfile,education,university,course,courseDuration,softwareName,softwareVersion,Experience,project,client,projectStatus,DetailsProject,profileSummary,SocialProfile,socialUrl,SocialDescription,workTitle,workUrl,WorkDescription,presentationTitle,presentationUrl,presentationDescription,certificationTitle,certificationComplettionID,certificationId,CurrentIndsutry,Department,RoleCategory,jobRole,preferredType,preferredWorkLocation,desiredJobType,desiredEmploymentType,expectedSalary,gender,maritalStatus,DOb,Address,homeTown,pinCode,UserId}=req.body;
    const alreadyUser=await resumeData.findOne({where:{UserId}}).catch((err)=>{
        console.log("Error" ,err)
    });
    if(alreadyUser){
        return res.json({message:"user already exists"})
    }
    const newUser=new resumeData ({ResumeHeadline,skills,currentEmp,empType,cmpyName,designation,skillsUsed,joiningDate,WorkedTill,jobProfile,education,university,course,courseDuration,softwareName,softwareVersion,Experience,project,client,projectStatus,DetailsProject,profileSummary,SocialProfile,socialUrl,SocialDescription,workTitle,workUrl,WorkDescription,presentationTitle,presentationUrl,presentationDescription,certificationTitle,certificationComplettionID,certificationId,CurrentIndsutry,Department,RoleCategory,jobRole,preferredType,preferredWorkLocation,desiredJobType,desiredEmploymentType,expectedSalary,gender,maritalStatus,DOb,Address,homeTown,pinCode,UserId});
    const saveUser=await newUser.save().catch((err)=>{
        console.log("Error",err);
        res.json({message:"cannot register at that moment"})

    });
    if(saveUser)
    res.json({message:"Data are collected"})
})
module.exports=router;

