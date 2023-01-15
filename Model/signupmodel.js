const mongoose=require("mongoose")
const signupschema=mongoose.Schema({
    name:String,
    age:Number,
    conatct:String,
    email:String,
    password:String,
})
const signupmodel=mongoose.model("signupdata",signupschema);
module.exports={
    signupmodel
}