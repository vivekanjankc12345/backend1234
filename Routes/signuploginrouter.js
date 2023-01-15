const express=require("express");
const userrouter=express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()
const {signupmodel}=require("../Model/signupmodel")



userrouter.post("/signup",async(req,res)=>{
    const {name,age,contact,email,password}=req.body;
    try{
        bcrypt.hash(password, 5, async(err,secure_password)=> {
            if(err)
            {
          console.log(err)
            }
            else{
                let post=new signupmodel({name,age,contact,email,password:secure_password});
                await post.save();
                console.log(post)
                res.send("register");
            }
        });

    }
    catch(err)
    {
        console.log(err)
    }
})
userrouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try
    {
    const post=await signupmodel.find({email});
    if(post.length>0)
    {
        bcrypt.compare(password,post[0].password, function(err, result) {
            if(result)
            {
                const token = jwt.sign({ foo: 'bar' }, 'process.env.key');
                res.send({"msg":"login sucessfull","token":token})
            }
            else{
                console.log("worng data")
            }
        });
    }else
    {
        console.log("worng data you enter")
    }
    }
    catch(err){
 console.log(err)
    }
})
module.exports={
    userrouter
}