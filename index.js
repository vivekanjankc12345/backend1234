const express=require("express");
const app=express();
require('dotenv').config()
const cors = require('cors');
const { connection } = require("./Config/db");
const {userrouter}=require("./Routes/signuploginrouter")
const {noterouter}=require("./Routes/notes")
const {auth}=require("./Middleware/authecate")
app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.get("/",async(req,res)=>
{
    res.send("alldata")
})
app.use("/user",userrouter)
app.use(auth)
app.use("/note",noterouter)
app.listen(process.env.port,async()=>{
    try{
   await connection
   console.log("connected to db")
    }
    catch(err)
    {
       console.log("kuch garbar h re baba")
       console.log(err)
    }
    console.log(`${process.env.port} port pe server kaam kar raha h`)
})