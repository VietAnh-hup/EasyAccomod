const dbConfig = require('../config/db/dbConfig');
const connection = require('../config/db/index');
const query = require('../config/db/query');
const fs = require('fs');

module.exports.deleteImage = async function(req , res , next )
{
    const conn = await connection(dbConfig).catch(e => {});
    var sql = "SELECT image FROM room WHERE room_id = ? "
    var resualts = await query(conn, sql , [req.body.room_id] )
    var image = JSON.parse(resualts[0].image);
    var checkCount = image.url.length - req.body.imageDel.length + req.files.length ;
    if (checkCount < 3 ){
        for(let i = 0 ; i < req.files.length ; i ++)
        {
            fs.unlink( req.files[i].path , function (err) {
                if (err) throw err;
                console.log('File deleted!');
              });
        }
        conn.end();
        res.send({
            err: "Số lượng ảnh chưa đủ"
        })
        return;
    }
    else{
        for(let i = 0 ; i < req.body.imageDel.length ; i ++){
            image.url = image.url.filter(url => url !== req.body.imageDel[i]);
            let src =  req.body.imageDel[i].split('/').join('\\')
            src = 'src\\public\\' + src;
            fs.unlink( src , function (err) {
                if (err) throw err;
                console.log('File deleted!');
              });
        }
    }
    res.locals.image = image;
    next();
}