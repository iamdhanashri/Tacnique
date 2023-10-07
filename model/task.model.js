
const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title: String,
    description: String,
    creationDate: String,
    status : { type: String, enum: ['pending', 'completed'], default: 'pending' },
});


const taskModel=mongoose.model("task",taskSchema)

module.exports={
    taskModel
}