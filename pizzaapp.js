const express= require('express');
const cors = require('cors')
const mongodb= require('mongodb');
const client=mongodb.MongoClient;
const URL=" mongodb://localhost:27017"
const database='pizza'

const app= express();
app.use(cors())
app.get('/menu',(req,res)=>{
    client.connect(URL,(err,result)=>{
        if(err){
            console.log("Error"+err)
        }
        else{
            console.log("Connected Successfully");
            const db= result.db(database);
            db.collection("menu").find().toArray((err,data)=>{
                if(err)
                console.log(err);
                else{
                console.log(data)
                 res.json(data)
            }});
        }
        result.close();
    });
});
app.get('/build',(req,res)=>{
    client.connect(URL,(err,result)=>{
        if(err){
            console.log("Error"+err)
        }
        else{
            console.log("Connected Successfully");
            const db= result.db(database);
            db.collection("build").find().toArray((err,data)=>{
                if(err)
                console.log(err);
                else{
                console.log(data)
                 res.json(data)
            }});
        }
        result.close();
        
    });
});
app.listen(6900,()=>{
    console.log('Listening')
})