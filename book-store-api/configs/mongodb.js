const mongodb = require("mongodb");
 const mongoClient = mongodb.MongoClient;
 
 
 const url="mongodb+srv://gopikalakshmia:parukutty@cluster0.hj6jd.mongodb.net/SLBookStore?retryWrites=true&w=majority";


 
//connecting to mongodb
var dbclient;
 exports.connect = ()=>{
    mongoClient.connect(url)
    .then((client)=>{
        dbclient=client;
        console.log("MongoDB is connected");
    })
    .catch(err=>{console.log(err)});
} 

//retriving the collection
exports.getCollection=(name)=>{

    return dbclient.db("SLBookStore").collection(name);
}