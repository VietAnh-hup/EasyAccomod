// routing trang chủ
const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/city/:city_name', siteController.getCity);
//router.get('/getRoom/:room_id' , siteController.getRoom);
router.get('/getRoom/:room_id' , siteController.getRoom);
router.post('/getTotalLike', siteController.getRoomLike)
router.get('/getComment/:room_id' , siteController.getComments)

router.get('/' , siteController.show)
//router.use('/:id' , siteController.product)

module.exports = router;
