import express from "express";
import { m1 } from "./middleware/agemiddleware.js";

const app=express();
const port=3005;
// app.use(m1);//apply to all 
app.get("/msg",m1,(req,res)=>{  //apply to only this route
    res.send("Welcome user");
})
app.get("/msg1",(req,res)=>{
    res.send("Hi user");
})

app.get("/msg2",(req,res)=>{  //apply to only this route
    res.send("Msg2 user");})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})