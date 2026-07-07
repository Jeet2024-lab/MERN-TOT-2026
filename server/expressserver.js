import express from "express"
import dotenv from "dotenv";
dotenv.config();
const port=process.env.PORT || 3002;
const app=express();
const userdata=[{
    id:1,
    name:"Jitendra Kumar Chauhan",
    email:"jitendra.chauhan@abes.ac.in"
},{id:2,
    name:"Amit Chauhan",
    email:"amit.chauhan@abes.ac.in"}]


app.listen(port,()=>{ 
    console.log(`   Server is running on port ${port}`);
})

app.get("/",(req,res)=>{
    res.status(200).json({message:"Welcome User"});
})


//middleware
app.use(express.json());

app.get("/users",(req,res)=>{
  try{
    res.status(200).json({message:"data received",userdata});}
    catch(err){
console.error("Error:",err.message);
    }



})

app.get("/users/:id",(req,res)=>{
  try{
    const id=req.params.id;
    const user=userdata.find((u)=>u.id==id);
    if(!user){
        return res.status(400).json({message:"User not found"});
    }
    res.status(200).json({message:"data received",user});
      }
    catch(err){
console.error("Error:",err.message);
    }
})


app.post("/create",(req,res)=>{
try{
    // const name=req.body.name;
    // const email=req.body.email;

    const {name:newname,email:newemail}=req.body;
    const newUser={
        id:userdata.length+1,
        name:newname,
        email:newemail,
    }
    userdata.push(newUser);
    res.status(201).json({message:"user created successfully",newUser});

}
catch(err){
    console.log("Error:",err.message);

}

})

app.delete("/delete/:id",(req,res)=>{
const id=req.params.id;
    const user=userdata.find((u)=>u.id==id);
    if(!user){
        return res.status(400).json({message:"User not found"});
    }

    userdata.splice(user,1);
    res.status(200).json({message:"User deleted sucessfully",userdata});




})

app.put("/update/:id", (req, res) => {
    const id = req.params.id;

    const index = userdata.findIndex((u) => u.id == id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Update the user
    userdata[index] = {
        ...userdata[index],
        ...req.body
    };

    res.status(200).json({
        message: "User updated successfully",
        userdata: userdata[index]
    });
});