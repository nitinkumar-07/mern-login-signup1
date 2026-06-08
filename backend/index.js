const express = require("express");
const db = require("./db");
const cors = require('cors');

const bodyParser = require("body-parser");
require('dotenv').config();


const authRoute = require("./routes/authRoutes");
const productRoute = require("./routes/productRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

app.get("/",(req,res)=>{
    return res.send("welcome to login signup page..")
});

app.use("/auth" , authRoute);
app.use("/products" , productRoute);

app.listen(PORT, console.log(`server started at port: ${PORT}`));