import http from "http";
import os from "os";
const userdata=[{
    id:"101",
    name:"Jitendra Kumar Chauhan",
    email:"jitendra.chauhan@abes.ac.in"
},
{
    id:"102",
    name:"Amit Chauhan",
    email:"amit.chauhan@gmail.com"
}];
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/msg" && method == "GET") {
    res.write("Welcome User");
    res.end();
  } else if (url == "/system" && method == "GET") {
    const sysdata = {
      platform: os.platform(),
      arch: os.arch(),
      CPU: os.cpus().length,
      IP: os.networkInterfaces(),
      TotalMemory: (os.totalmem() / 1024 ** 3).toFixed(2) + "GB",
      FreeMemory: (os.freemem() / 1024 ** 3).toFixed(2) + "GB",
    };
    res.end(JSON.stringify(sysdata));
  } 
  else

  if (url == "/users" && method == "GET") {
    
    res.end(JSON.stringify(userdata));
  } 
  else
    
  if (url.startsWith("/user/") && method == "GET") {
    const id=url.split("/")[2];
    const user=userdata.find((u)=>u.id==id);
if(!user){
   return  res.end("user not found");
}
res.end(JSON.stringify(user));
  } 
  else if(url=="/create" && method=="POST")
  {
    let body="";
 
    req.on("data",(chunk)=>{ body+=chunk;});
    req.on("end",()=>{ const data=JSON.parse(body);
const newUser={
      // id:data.id,
      id: Math.floor(Math.random() * 100) + 1,
      name:data.name,
      email:data.email
    }
userdata.push(newUser);
    });
    

res.statusCode=201;
res.end("user created successfully");
  }
  else {
    res.statusCode = 404;
    res.end("Error Page");
  }
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
