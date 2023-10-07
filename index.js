
const express=require("express");
const { dbConnection } = require("./config/db");
const { userRouter } = require("./route/user.route");
const { taskRouter } = require("./route/task.route");
const { authenticate } = require("./middleware/authenticate.middleware");
const rateLimit = require("express-rate-limit");


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: "Too many requests from this IP, please try again later.",
  });



const app=express();
app.use(limiter);

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.use("/user",userRouter)
app.use(authenticate)
app.use("/tasks",taskRouter)

app.listen(8080,async()=>{
    try{
   await dbConnection
   console.log("connected to db")
    }
    catch(e){
        console.log(e.message)
    }
    console.log("listening port at 8080")
})