const express = require('express')
const mongoose = require('mongoose')
const router=require('./Routes/roomRoutes')
const cors=require('cors')
const app=express();
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})
const DB=process.env.DATABASE_URL;
const PORT= process.env.PORT || 5000 
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
    app.listen(`${PORT}`);
}).catch((err)=>console.log(err))
