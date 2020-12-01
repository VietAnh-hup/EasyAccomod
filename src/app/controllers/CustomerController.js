const { customerCreat } = require('../model/customer');
const customer = require('../model/customer')

class CustomerController {
    // GET /product/:name
    creat(req, res) {
        // res.render('customer/login')
        //customer.customerCreat(req.body , res)
        res.render( 'customer/singin', {layout: false})
    }

    store(req, res)
    {
        console.log(req.body)
        customer.customerCreat(req.body, res)
        res.send('1')
    }
}

module.exports = new CustomerController();