const express=require("express");
const { notemodel } = require("../Model/notemodel");
const noterouter=express.Router();
noterouter.get("/notedata",async(req,res)=>{
    try{
     let que=req.body;
     const get=await notemodel.find(que);
  res.send(get)
    }
    catch(err)
    {
  console.log(err)
    }
})
noterouter.post("/notedata",async(req,res)=>{
    const payload=req.body;
    try{
    const post=new notemodel(payload);
    await post.save();
    res.send("data added sucessfully")
    }
    catch(err)
    {
res.send(err)
    }
})
noterouter.patch("/notedata/:id",async(req,res)=>{
    const id=req.params.id
    const payload=req.body;
    try{
    await notemodel.findByIdAndUpdate({_id:id},payload);
    res.send(`data update sucessfully id:${id}`)
    }
    catch(err)
    {
res.send(err)
    }
})
noterouter.delete("/notedata/:id",async(req,res)=>{
    const payload=req.params.id;
    try{
    await notemodel.findByIdAndDelete(payload);
    
    res.send(`data deleted sucessfully id:${payload}`)
    }
    catch(err)
    {
res.send(err)
    }
})
module.exports={
    noterouter
}
