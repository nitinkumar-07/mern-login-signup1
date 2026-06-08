const mongoose = require("mongoose");

//const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    password:{
        type:String,
        required:true
    }
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;