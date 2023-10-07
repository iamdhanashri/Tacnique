
const bcrypt = require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")
const { taskModel } = require("../model/task.model")
const e = require("express")

const taskRouter=express.Router()

// post 

taskRouter.post("/",async(req,res)=>{
    const task=new taskModel(req.body)
    await task.save()
    res.send({"msg":"Task created successfully"}) 
})

// get

taskRouter.get("/",async(req,res)=>{
    const task= await taskModel.find()
    if(task.length>0){
    res.status(200).send(task)  
    }
    else{
    res.send({"msg":"Task not found"}) 

    }
})
 

// getId 

taskRouter.get("/:id",async(req,res)=>{
    const id =req.params.id
    const task =await taskModel.findOne({_id:id})
    res.status(200).send(task)
})


 //patchId

 taskRouter.put("/:id",async(req,res)=>{
    const taskID=req.params.id
    console.log(taskID)
    await taskModel.findByIdAndUpdate({_id:taskID},req.body) 
    res.send({"msg":`Task with id:${taskID} has been updated`})
 })

 
// deleteId

taskRouter.delete("/:id",async(req,res)=>{
    const taskID=req.params.id
    await taskModel.findByIdAndDelete({_id:taskID}) 
    res.send({"msg":`Task with id:${taskID} has been deleted`})
 })



module.exports={
    taskRouter
}