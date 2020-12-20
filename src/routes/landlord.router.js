const express = require('express');
const router = express.Router();

const landlordCreate = require('../app/validate/landlord.validate')
const RegisterLandlordController = require('../app/controllers/registerLandlordController')
const AuthClassify = require('../app/middlewares/auth.classify.middleware')
const AuthLandlord = require('../app/middlewares/auth.landlord.middleware')

router.get('/register' , RegisterLandlordController.create)
router.post('/register/store' ,landlordCreate.postCreate ,AuthClassify.checkDuplicate , RegisterLandlordController.store)
router.get('/editAccount' , AuthLandlord.authClassify , RegisterLandlordController.getEditAccount)
router.put('/editAccount/store' , AuthLandlord.authClassify, landlordCreate.postCreate, RegisterLandlordController.editAccount)


module.exports = router;