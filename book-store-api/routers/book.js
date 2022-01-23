const controller=require("../controllers/book")
//import express package
const express=require("express");
//create router
const router=express.Router();

//configure path
router.get('/',controller.getAll);

module.exports=router;