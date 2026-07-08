import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/userRoutes.js";

dotenv.config();
const port=process.env.PORT|| 3001;

const app=express();
app.use(express.json());
connectDB();
app.use(router);
app.listen(port,()=>{console.log(`Server is running on port ${port}`)});
