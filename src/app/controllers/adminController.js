const dbConfig = require('../config/db/dbConfig');
const connection = require('../config/db/index');
const query = require('../config/db/query');
const md5 = require('md5')

class adminController{
    getAdmin(req, res )
    {
        //console.log(req.cookies.customer_id)
        res.send(req.cookies.customer_id)
    }
}

module.exports = new adminController;