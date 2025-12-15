import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let PORT = process.env.PORT || 8000
let server = express();

//mongoose.connect().then().catch()
server.get("/",(req, res)=>{
    res.send("welcome to, backend of Hospital management software");
});

server.listen(PORT,()=>{
console.log(`server is running at http://localhost:${PORT}`);
}
);