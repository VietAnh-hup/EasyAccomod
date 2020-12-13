// routing chung
const siteRouter = require('./site');

const customerRouter = require('./customer')
const login = require('../app/controllers/loginController')
const adminRouter = require('./admin.routes')

function route(app) {
    
    app.use('/customer', customerRouter);
    app.use('/', siteRouter);
    app.post('/login', login.login )
    app.get('/login' , login.create)
    app.use('/admin', adminRouter)
    
    
}

module.exports = route;
