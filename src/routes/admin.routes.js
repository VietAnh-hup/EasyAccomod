const express = require('express');
const router = express.Router();

const admincontroller = require('../app/controllers/adminController');
const AuthAdmin = require('../app/middlewares/auth.admin.middleware');
const AuthConfirmRoom = require('../app/middlewares/auth.confirmRoom.middleware');
const roomValidate = require('../app/validate/room.validate');
const upload = require('../app/middlewares/multipleUploadMiddleware')
const AuthExtend = require('../app/middlewares/auth.extendRoom.middleware')


router.get('/getLandlord' , AuthAdmin.authClassify   , admincontroller.getLandlord);
router.put('/confirmLandlord', AuthAdmin.authClassify , admincontroller.confirmLanlord);
router.get('/getRooms' , AuthAdmin.authClassify, admincontroller.getRooms);
router.put('/confirmRoom' , AuthAdmin.authClassify , AuthConfirmRoom.authConfirmRoom , admincontroller.confirmRoom);
router.put('/notBrowseRoom' , AuthAdmin.authClassify, AuthConfirmRoom.authConfirmRoom , admincontroller.notBrowseRoom);
router.post('/createRoom/store' , upload, AuthAdmin.authClassify , roomValidate.postCreate , admincontroller.adminCreateRoom);
router.get('/getExtend' , AuthAdmin.authClassify , admincontroller.getExtend)
router.put('/confirmExtend' , AuthAdmin.authClassify , AuthExtend.authConfirmRoom, admincontroller.confirmExtend)
router.put('/notConfirmExtend' , AuthAdmin.authClassify, AuthExtend.authConfirmRoom , admincontroller.notConfirmExtend)
router.get('/getNotification' , AuthAdmin.authClassify, admincontroller.getNotification) 
router.put('/readNotification' , AuthAdmin.authClassify, admincontroller.readNotification)
router.put('/readAllNotification' , AuthAdmin.authClassify, admincontroller.readAllNotification)
router.post('/statisticalView', AuthAdmin.authClassify , admincontroller.adminStatisticalView)
router.post('/statisticalLike', AuthAdmin.authClassify , admincontroller.adminStatisticalLike)
router.post('/statisticalCreate', AuthAdmin.authClassify , admincontroller.adminStatisticalCreate)
router.get('', AuthAdmin.authClassify ,admincontroller.showAdmin);

module.exports = router;