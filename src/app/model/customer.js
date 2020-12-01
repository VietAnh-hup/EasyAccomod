//const conn = require('../config/db')


function customerCreat(cus , res)
{
    conn = require('../config/db')
    conn.connecting;
    //let checkEmailSql = "SELECT * FROM customer"
    //let sql = "SELECT * FROM film LIMIT 10;"
    //conn.connect.query("SELECT * FROM film LIMIT 10;" , function(err, resualts){console.log(resualts)})
    // let dulicateEmail;
    // let dulicatePhone;
    //console.log(cus.email)
    conn.connect.query( "SELECT COUNT(*) FROM customer" , function (err, resualts){
         console.log(resualts);
    })
    // conn.connect.query(checkEmailSql,  function (error , resualt){
    // if (error) throw error.stack;
    // else {
    //          console.log(resualt)
         
    //      }
    //  } )
    // conn.connect.query(checkEmailSql, [cus.phone], function (error , resualt){
    //     if (error) throw error.stack;
    //     else {
    //     if (resualt == 0 ) dulicatePhone = false;
    //     else dulicatePhone = true;
    //     }
    // } )
    // console.log(dulicatePhone);

    // let sql = "INSERT INTO customer (fullName , phone , email , password) VALUES ('" + cus.fullname + "','" + cus.phone + "','" + cus.email + "','" + cus.password + "')" ;
    // console.log(sql)
    // conn.connect.query(sql , () => {})
    //conn.end;
    conn.connect.end();
}

module.exports = {customerCreat};