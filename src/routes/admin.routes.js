const express = require('express');
const router = express.Router();

const admincontroller = require('../app/controllers/adminController');
const adminController = require('../app/controllers/adminController')

router.get('', admincontroller.getAdmin);

module.exports = router;