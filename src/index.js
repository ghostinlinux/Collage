const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const collection = require("./mongodb");


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json);
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render('login')
});

app.get("/signup",(req,res)=>{
    res.render("signup")
});

app.post("/signup",async(req,res)=>{
    const data= {
        username:req.body.name,
        password:req.body.pass
    }
    await collection.insertMany([data])
})





app.listen(8000,()=>{
    console.log("Port connected");
})