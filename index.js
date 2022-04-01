const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.json())
app.use(cors())
// const port = process.env.Port || 1337;
app.use(express.static(__dirname + "/frontend/build"));
const URI = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/sample_guides?retryWrites=true&w=majority";
const mongoose = require('mongoose');
const listingsAndReviews = require('./model/listingsAndReviews');

try{
    mongoose.connect(
    URI, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {console.log(" Mongoose is connected")
            // console.log(client)
});
    }catch(e){
        console.log("ERROR!");
    }
let alldata;

app.get("/api/info", (req, res)=>{
    //  console.log(alldata)
    //  console.log("in heree")
    try{
        return res.send({success: true, alldata: alldata})
    }catch(exception){
        return res.send({success: false});
    }
})

setTimeout(async()=>{
    // const data = mongoose.connection;
    // console.log(data.models);
    alldata = await listingsAndReviews.find();
    //console.log(alldata)

}, 5000)

app.get("/", (req, res)=>{
    res.send({success: true, msg: "Hello World"});
})
app.get("/*", async (req, res) => {
    res.sendFile(process.cwd() + "/frontend/build/index.html");
})

app.listen(1337, ()=>{
    console.log("Server started on 1337")
})