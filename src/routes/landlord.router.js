const express = require('express');
const router = express.Router();

const landlordCreate = require('../app/validate/landlord.validate')
const RegisterLandlordController = require('../app/controllers/registerLandlordController')
const AuthClassify = require('../app/middlewares/auth.classify.middleware')
const AuthLandlord = require('../app/middlewares/auth.landlord.middleware')
const upload = require('../app/middlewares/multipleUploadMiddleware')
const createRoom = require('../app/controllers/createRoomController')
const roomValidate = require('../app/validate/room.validate')
const roomEditValidate = require('../app/validate/room.edit.validate')
const AuthDeleteImage = require('../app/middlewares/auth.deleteImage')
const AuthRoom = require('../app/middlewares/auth.room')



router.get('/register' , RegisterLandlordController.create)
router.post('/register/store' ,landlordCreate.postCreate ,AuthClassify.checkDuplicate , RegisterLandlordController.store)
router.get('/editAccount' , AuthLandlord.authClassify , RegisterLandlordController.getEditAccount)
router.put('/editAccount/store' , AuthLandlord.authClassify, landlordCreate.postCreate, RegisterLandlordController.editAccount)
router.get('/createRoom' , AuthLandlord.authClassify ,createRoom.getCreateRoom)
router.post('/createRoom/store' , upload, AuthLandlord.authClassify , roomValidate.postCreate , createRoom.createRoom)
router.get('/editRoom' , AuthLandlord.authClassify , AuthRoom.authRomm, createRoom.getEditRoom)
router.put('/editRoom/store' , upload, AuthLandlord.authClassify , AuthRoom.authRomm , roomEditValidate.putEdit, AuthDeleteImage.deleteImage, createRoom.editRoom );
//router.post('createRoom' , upload , AuthLandlord.authClassify , roomValidate.postCreate , createRoom.createRoom)


module.exports = router;