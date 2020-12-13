const express = require('express');
const admincontroller = require('../app/controllers/adminController');
const router = express.Router();
const adminController = require('../app/controllers/adminController')

router.get('', admincontroller.getAdmin);

module.exports = router;