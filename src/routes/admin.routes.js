const express = require('express');
const router = express.Router();

const admincontroller = require('../app/controllers/adminController');
const AuthAdmin = require('../app/middlewares/auth.admin.middleware');

router.get('/getLandlord' , AuthAdmin.authClassify   , admincontroller.getLandlord);
router.get('', admincontroller.getAdmin);

module.exports = router;