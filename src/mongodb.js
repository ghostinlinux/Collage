const mongoose = require("mongoose");

mongoose.set('strictQuery',true);
const db_link = "mongodb+srv://testing:pratik123@cluster0.p7r6n7z.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db_link)
.then(()=>{
    console.log("Db connected");
})
.catch((err)=>{
    console.log(err);
})

const studentschema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


const collection = new mongoose.model("vidhyarthi",studentschema);

module.exports = collection;