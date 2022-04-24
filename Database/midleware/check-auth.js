const jwt = require("jsonwebtoken")

module.exports =(req,res,next)=>{
    try{
        const token = req.headers.authorization.
        split(" ")[1];
        jwt.verify(token,"secret_this_should_be_good");
        next();
    }catch(err){
      res.status(401).json({message : "Auth failed !"})  
    }
    
}