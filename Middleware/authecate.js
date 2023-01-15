const jwt=require("jsonwebtoken");
const auth=(req,res,next)=>{
const token=req.headers.authorization;
console.log(token)
 if(token)
 {
 const decoded=jwt.verify(token, "masai");
 if(decoded)
 {
    next();
 }
 else
 {
    res.send("please login first baba ")
 }
}
else{
    res.send("please login firt baba ")

}
}
module.exports={
    auth
}