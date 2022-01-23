//import mongodb

const db=require("../configs/mongodb");


exports.getAll=(cb)=>{
    const collection=db.getCollection("Book");
    collection.find().toArray()
    .then((book)=>{cb(book)})
    .catch(err=>{console.log(err);})
    
}

