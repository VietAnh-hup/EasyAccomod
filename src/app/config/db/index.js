const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('easyaccomod2' , 'root' , '' ,{
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
} )










// const mysql = require('mysql');


// const connect = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     // database: 'classicmodels',
//     database: 'easyaccomod2',
//     multipleStatements: true
// })

// const connecting = connect.connect(function (err){
//     if (err) throw err.stack
//     else console.log('Connect successfully')
// })

// //const end = connect.end();


// module.exports = {connect, connecting };