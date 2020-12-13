// routing cac tac vu khach hang
const express = require('express');
const router = express.Router();


const Customerontroller = require('../app/controllers/CustomerController');
const RegisterCustomerController = require('../app/controllers/registerCustomerController')
const customerCreate = require('../app/validate/custumer.validate')
const AuthCustomer = require('../app/middlewares/auth.customer.middleware')


router.post('/register/store', customerCreate.postCreate, RegisterCustomerController.store );
router.get('/register', RegisterCustomerController.creat);
router.post('/like' , AuthCustomer.authCustomer, Customerontroller.likeNews)
router.post('/comment' ,AuthCustomer.authCustomer, Customerontroller.comment )



module.exports = router;