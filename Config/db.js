const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://vivekanjankc:vivek@cluster0.ytfh4tz.mongodb.net/?retryWrites=true&w=majority");
module.exports={
    connection
}