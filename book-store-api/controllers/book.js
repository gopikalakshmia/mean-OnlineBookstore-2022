const router = require("../routers/book");
const repo=require("../repositories/book");
const { response } = require("express");

exports.getAll=(req,res)=>{
    repo.getAll((books)=>{
        res.send(books);
    });
    
}





//router.get('/',controller.getAll);