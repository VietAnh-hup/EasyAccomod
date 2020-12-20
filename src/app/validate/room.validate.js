const fs = require('fs')


module.exports.postCreate = function (req , res , next){
    var rageHouse_number = /^(0-9]+)(([A-Z])+)*$/;
    if (req.body.house_number){
        if (req.body.house_number.match(rageHouse_number)){
            res.status(404).end()
            return;
        }
    } 

    if (!req.body.address || !req.body.street || !req.body.town || !req.body.district || !req.body.city
         ){
            res.status(404).end()
            return;
    }

    if (!(req.body.room_kind == "phòng trọ" || req.body.room_kind ==  "chung cư mini" || req.body.room_kind ==  "chung cư nguyên căn")){
        res.status(404).end()
        return;
    }
    if(!req.body.amount.match(/^(0-9]+)$/)){
        res.status(404).end()
        return;
    }
    if (!(req.body.cycile == 'week' || req.body.cycile == 'month' || req.body.cycile == 'year' || req.body.cycile == 'quarter')
    {
        res.status(404).end()
        return;
    }
    if (!req.body.cost_room.match(/^(0-9]+)$/) || !req.body.acreage.match(/^(0-9]+)$/)){
        res.status(404).end()
        return;
    }
    if(!(req.body.WC_status == 'Chung' || req.body.WC_status == 'Riêng' )){
        res.status(404).end()
        return;
    }
    if(!(req.body.water_hot == 'Có' || req.body.water_hot == 'Không'))
    {
        res.status(404).end()
        return;
    }
    if(!(req.body.water_hot == 'Có' || req.body.water_hot == 'Không'))
    {
        res.status(404).end()
        return;
    }
    if (!(req.body.kitchen == 'Không nấu ăn' || req.body.kitchen == 'Bếp riêng' || req.body.kitchen == 'Bếp chung' ))
    {
        res.status(404).end()
        return;
    }
    if (!(req.body.air_conditioner == 'Không' || req.body.air_conditioner == 'Có') || !(req.body.balcony == 'Có' || req.body.balcony == 'Không') )
    {
        res.status(404).end()
        return;
    }
    if (!(req.body.electricity_water_status == 'Giá dân' || req.body.electricity_water_status == 'Giá thuê' ) || !(req.body.status == 'Chung chủ' || req.body.status == 'Không chung chủ' ))
    {
        res.status(404).end()
        return;
    }
    if (!res.body.electricity_cost.match(/^(0-9]+){1,5}$/) || !res.body.water_cost.match(/^(0-9]+){1,5}$/) )
    {
        res.status(404).end()
        return;
    }
    if(req.files.length < 3)
    {

        for(var i = 0 ; i < req.files.length ; i ++)
        {
            fs.unlink( req.files[i].path , function (err) {
                if (err) throw err;
                console.log('File deleted!');
              });
        }
        res.status(404).end();
        return;
    }
    if(!req.body.time_life.match(/^(0-9]+){1,11}$/){
        res.status(404).end()
        return;
    }
    next();



    //if (!)
    
}