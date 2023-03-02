const express=require('express')
const router=express.Router();
const room=require('../Models/room')
const  booksController=require('../Controllers/controllers')
router.get("/",booksController.getAllRooms);
router.post("/",booksController.addRoom);
router.get("/:id",booksController.getRoomById);
router.put("/:id",booksController.updateRoom);
router.delete("/:id",booksController.deleteRoom);
module.exports = router;