const dbConfig = require('../config/db/dbConfig');
const connection = require('../config/db/index');
const query = require('../config/db/query');
const md5 = require('md5');


class loginCustomer{
    create(req, res){
        res.render('login/login', {layout: false});
    }

    async login(req , res)
    {
        console.log(req.body.form)
        if (req.body.phone && req.body.password){

        const conn = await connection(dbConfig).catch(e => {});
        var sql = "SELECT * FROM classify WHERE phone_number = ?"
        var resualts =  await query(conn, sql, [req.body.phone]).catch(console.log);
        //console.log(resualts)
        if (!resualts[0].phone_number){
            res.render('login/login', {
                err : 'Tài khoản không tồn tại'
            });
            return;
        }
        //console.log(1)

        var Description = resualts[0].Description ;
        //console.log(Description);
        sql = "SELECT * FROM " +Description +  " WHERE phone = ? "
        resualts = await query(conn, sql, [req.body.phone]).catch(console.log);
        //console.log(resualts)
        var password = md5(req.body.password);
        if (password !== resualts[0].password )
        {
            res.render('login/login', {
                err : 'Mật khẩu không chính xác'
            });
            return;
        }
        
        if (password === resualts[0].password){
            //console.log(Description)
            if (Description == 'customer')
            {
            res.cookie('customer_id' ,resualts[0].customer_id ,{
                signed: true
            })
            res.cookie('sessions', Description )
            res.send({
                data : 'Customer',
                fullname: resualts[0].fullname
            })
            return;
            }
            if (Description == 'landlords')
            {
                
                if(resualts[0].accuracy == 0)
                {
                    res.render('login/login', {
                        err : 'Tài khoản này không tồn tại'
                    });
                    return;
                }
                else{
                res.cookie('landlord_id' ,resualts[0].landlord_id ,{
                    signed: true
                })
                    res.cookie('sessions', Description )
                    res.send({
                        data: 'landlord',
                        fullname: resualts[0].fullname
                    })
                    //res.render('landlord/landlord') 
                    return;
                }
            }
            if (Description == 'admin')
            {
                    res.cookie('admin_id' ,resualts[0].admin_id ,{
                        signed: true
                    })
                    res.cookie('sessions', Description )
                    res.send({
                        data: 'admin',
                        fullname: resualts[0].fullname
                    })
                    //return res.redirect('admin');
            }
        }

    }
    res.send();
    }

}

module.exports = new loginCustomer;

