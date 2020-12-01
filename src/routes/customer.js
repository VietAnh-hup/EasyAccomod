// routing cac tac vu khach hang
const express = require('express');
const router = express.Router();

const Customerontroller = require('../app/controllers/CustomerController');

router.post('/singin/store', Customerontroller.store )
router.get('/singin', Customerontroller.creat);



module.exports = router;