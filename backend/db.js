const mongoose = require("mongoose");
require('dotenv').config();

//mongoose.connect("mongodb://127.0.0.1:27017/loginSignup");

const mongo_URL = process.env.MONGO_CONN;

mongoose.connect(mongo_URL);

const db = mongoose.connection;

db.on("connected" , ()=>{
    console.log("mongoDb connected")
});

db.on("error" ,(err) =>{
    console.error("mongoDb connection error" , err)
});

db.on("disconnected" ,()=>{
    console.log("mongoDb disconnected")
});

module.exports = db;