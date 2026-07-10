import express from "express";
export const m1=(req,res,next)=>{
const age=req.query.age;
console.log("age=",age);
if(age>18)
{
    next();
}
else
return res.status(401).json({message:"not autherized"});





}