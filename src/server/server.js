import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {connectDB}  from './connect-db';
import './initialize-db';
let port = 7777;
let app = express();
app.listen(port, console.log("LISTENING ON PORT",port));

// app.get("/",(req,res) => {
//     res.send("WORKING");
// })

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
)
export const addNewTask = async task =>{
    let db = await connectDB();
    let collection =  db.collection("tasks");
    await collection.insertOne(task);
}

export const updateTask = async task =>{
    console.log("task is",task);
    let {name, group, isComplete, id} = task;
    let db = await connectDB();
    let collection = db.collection("tasks");
    if(name){
        await collection.updateOne({id}, {$set:{name}})
    }
    if(group){
       await collection.updateOne({id}, {$set:{group}})
    }
    if(isComplete !== undefined){
        await collection.updateOne({id}, {$set:{isComplete}})
    }

}
app.post("/tasks/new",async (req,res) => {
    let {task} = req.body;
    addNewTask(task);
    res.status(200).send();
})

app.post("/tasks/update",async (req,res) => {
    let {task} = req.body;
    updateTask(task);
    res.status(200).send();

})