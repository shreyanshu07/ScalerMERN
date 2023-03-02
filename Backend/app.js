const express = require('express')
const mongoose = require('mongoose')
const router=require('./Routes/roomRoutes')
const cors=require('cors')
const app=express();
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'})
const DB="mongodb+srv://shreyanshu:shreyanshu@hotelrooms.fjdshze.mongodb.net/?retryWrites=true&w=majority";
//MiddleWare
// app.use('/',(req,res)=>{
//     res.send("This is starting application")
// })
app.use(express.json())
app.use(cors())
app.use('/rooms',router)

const URL=
mongoose.connect(DB,{
    
})
.then(()=>console.log("Successfully Connected"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err))