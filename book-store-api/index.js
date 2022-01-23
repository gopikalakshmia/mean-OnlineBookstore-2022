//import express package
const express=require("express");
//import router
const bookRoutes=require("./routers/book");

const mongodb=require("./configs/mongodb");
const cors = require("cors");
//create server
const server=express();

mongodb.connect();
//assigning port
server.listen("3100");
server.use(cors("*"));
//custom routes
server.use('/api/Book',bookRoutes);

server.get("/",(req,res)=>{
    res.send("hello from express.js")
});
console.log("server is listening to localhost:3100");