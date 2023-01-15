const express=require("express");
const app=express();
const cors = require('cors');
const { connection } = require("./Config/db");
const {userrouter}=require("./Routes/signuploginrouter")
const {noterouter}=require("./Routes/notes")
const {auth}=require("./Middleware/authecate")
app.use(cors())
app.use(express.json());
app.use("/user",userrouter)
app.use(auth)
app.use("/note",noterouter)
app.listen(8080,async()=>{
    try{
   await connection
   console.log("connected to db")
    }
    catch(err)
    {
       console.log("kuch garbar h re baba")
       console.log(err)
    }
    console.log("server8080 pe kaam karti")
})