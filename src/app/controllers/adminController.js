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

    async getLandlord(req , res){
        const conn = await connection(dbConfig).catch(e => {});
        var sql = "SELECT landlord_id , fullName, citizen_id, address, phone, email, accuracy , edit_status , lastUpdate  FROM landlords WHERE 1 ";
        var resualts = await query(conn, sql).catch(console.log);
        for (let i = 0 ; i < resualts.length ; i ++){
            resualts[i].lastUpdate = Intl.DateTimeFormat('en-US').format(resualts[i].lastUpdate)
        }
        console.log(resualts);
        conn.end();
        res.send(resualts).end();


    }
}

module.exports = new adminController;