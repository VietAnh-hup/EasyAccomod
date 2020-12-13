const dbConfig = require('../config/db/dbConfig');
const connection = require('../config/db/index');
const query = require('../config/db/query');
class SiteController {
    // GET /news
    

    async search(req, res) {
        const conn = await connection(dbConfig).catch(e => {});
        if (req.query.searchValue)
        {
            var sql = "SELECT * FROM room WHERE "
            var searchValue = '%' + req.query.searchValue + '%';
            console.log(req.query.searchValue)
            var public_places = '%' + req.query.public_places + '';
            if (req.query.location == '' || !req.query.location ){
                 sql = sql + " address LIKE ? "
            }
            if (req.query.location == 'city')
            {
                console.log(req.query.location)
                sql = sql + "city LIKE ? "
            }
            if (req.query.location == 'district')
            {
                sql = sql + "district LIKE ? "
            }
            if (req.query.location == 'town')
            {
                sql = sql + "town LIKE ? "
            }
            sql = sql + "AND public_places LIKE ? "
            if (req.query.room_kind == 'Phòng trọ')
            {
                sql = sql + "AND room_kind = 'Phòng trọ' "
            }
            if (req.query.room_kind == 'Chung cư mini')
            {
                sql = slq + "AND room_kind = 'Chung cư mini' " 
            }
            if (req.query.room_kind == 'Chung cư nguyên căn')
            {
                sql = sql + "AND room_kind = 'Căn hộ nguyên căn' "
            }
            if (req.query.wc_status == 'Chung')
            {
                sql = sql + "AND WC_status = 0 "
            }
            if (req.query.wc_status == 'Khép kín')
            {
                sql = sql + "AND WC_status = 1 "
            }
            if (req.query.air_conditioner == 'Có')
            {
                sql = sql + "AND Air_conditioner = 1 "
            }
            if (req.query.air_conditioner == 'Không')
            {
                sql = sql + "AND Air_conditioner = 0 "
            }
            if (req.query.water_hot == 'Có')
            {
                sql = sql + "AND water_hot = 1 "
            }
            if (req.query.water_hot == 'Không')
            {
                sql = sql + "AND water_hot = 1 "
            }
            if (req.query.balcony == 'Có' )
            {
                sql = sql + "AND balcony = 1 "
            }
            if (req.query.balcony == 'Không' )
            {
                sql = sql + "AND balcony = 0 "
            }
            if(req.query.kitchen == 'Bếp riêng')
            {
                sql = sql + "AND kitchen = 'Bếp riêng' "
            }
            if(req.query.kitchen == 'Bếp chung')
            {
                sql = sql + "AND kitchen = 'Bếp chung' "
            }
            if(req.query.kitchen == 'Không nấu ăn')
            {
                sql = sql + "AND kitchen = 'Không nấu ăn' "
            }
            if(req.query.landlord_status == 'Chung chủ')
            {
                sql = sql + "AND status = '1' "
            }
            if(req.query.landlord_status == 'Không chung chủ')
            {
                sql = sql + "AND status = '0' "
            }
            if(req.query.cost_room_max != '' && req.query.cost_room_max)
            {
                var cost_room_max = parseInt(req.query.cost_room_max)
                sql = sql + "AND cost_room < " + cost_room_max + ' ';
            }
            if(req.query.cost_room_min != '' && req.query.cost_room_min)
            {
                var cost_room_min = parseInt(req.query.cost_room_min)
                sql = sql + "AND cost_room > " + cost_room_min + " ";
            }
            if(req.query.acreage_max != '' && req.query.acreage_max)
            {
                var acreage_max = parseInt(req.query.acreage_max)
                sql = sql + "AND acreage < " + acreage_max + " ";
            }
            if(req.query.acreage_min != '' && req.query.acreage_min)
            {
                var acreage_min = parseInt(req.query.acreage_min)
                sql = sql + "AND acreage < " + acreage_min + " ";
            }
            console.log(sql);
            var resualts = await query(conn, sql, [searchValue,public_places]).catch(console.log);
            console.log(resualts)
            res.send(resualts);
        }
        else{
            res.send()
        }
        conn.end();
    }

    async getCity(req , res)
    {
        const conn = await connection(dbConfig).catch(e => {});
        var sql = "SELECT * FROM room WHERE city = ? "
        var resualts = await query(conn, sql , [req.params.city_name])
        res.send(resualts);
        conn.end();
    }

    show(req, res){
        res.render('home')
    }


}

module.exports = new SiteController();
