
const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        // const decoded= jwt.verify(token,"masai",(err,decoded)=>{   #OR
       
        jwt.verify(token,"masai",(err,decoded)=>{
        if(decoded){
            req.body.author = decoded.userID
            // console.log(req.body)
            next()
        }else{
            res.send({"msg":"please login"})
        }
      })  
    }else{
        res.send({"msg":"please login"})

    }
}

module.exports={
    authenticate    
}