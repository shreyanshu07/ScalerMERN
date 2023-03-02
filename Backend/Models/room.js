const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    CustomerName:{
        type:String,
        required:true
    },
    CustomerMailId:{
        type:String,
        required:true 
    },
    RoomType:{
        type:String,
        required:true 
    },
    StartDate:{
        type:String,
        required:true 
    },
    EndDate:{
        type:String,
        required:true 
    }

});
module.exports = mongoose.model('Book',bookSchema);