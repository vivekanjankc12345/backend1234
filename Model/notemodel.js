const mongoose=require("mongoose");
const noteschema=mongoose.Schema({
    title:String,
    note:String,
    category:String
})
const notemodel=mongoose.model("note",noteschema);
module.exports={
    notemodel
}