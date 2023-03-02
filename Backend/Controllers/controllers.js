const Room=require('../Models/room')
const getAllRooms=async(req,res,next)=>{
    let rooms;
    try{
        rooms=await Room.find();
    }
    catch(err){
        console.log(err)
    }
    if(!rooms){
        return res.status(404).json({"message":"No Products Found"})
    }
    return res.status(200).json({rooms});
}
const getRoomById=async(req,res,next)=>{
    const id=req.params.id;
    let room;
    try{
        room=await Room.findById(id);
    }
    catch(err){
        console.log(err)
    }
    if(!room){
        return res.status(404).json({message:"No Book found of that id"})
    }
    return res.status(201).json({room});

}
const addRoom=async(req,res,next)=>{
    const {CustomerName,
        CustomerMailId,
        RoomType,
        StartDate,
        EndDate}=req.body;
    let room;
    try{
        room=new Room({
            CustomerName,
            CustomerMailId,
            RoomType,
            StartDate,
            EndDate
            
        });
        await room.save();
    }
    catch(err){
        console.log(err);
    }
    if(!room){
        return res.status(500).json({message:"Unable to Add"})
    }
    return res.status(201).json({room});
}
const updateRoom =async(req,res,next)=>{
    const id=req.params.id;
    const {CustomerName,
        CustomerMailId,
        RoomType,
        StartDate,
        EndDate}=req.body;
    let room;
    try{
        room= await Room.findByIdAndUpdate(id,{
            CustomerName,
            CustomerMailId,
            RoomType,
            StartDate,
            EndDate
        }) 

        await room.save();
    }
    catch(err){
        console.log(err);
    }
    if(!room){
        return res.status(500).json({message:"Unable to Update"})
    }
    return res.status(201).json({room});

}
const deleteRoom =async(req,res,next)=>{
    const id=req.params.id;
    let room;
    try{
        room= await Room.findByIdAndRemove(id) 

        
    }
    catch(err){
        console.log(err);
    }
    if(!room){
        return res.status(500).json({message:"Unable to Delete"})
    }
    return res.status(201).json({room});

}
exports.getAllRooms=getAllRooms;
exports.addRoom=addRoom;
exports.getRoomById=getRoomById;
exports.updateRoom=updateRoom;
exports.deleteRoom=deleteRoom;