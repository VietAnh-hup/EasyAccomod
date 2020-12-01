
class SiteController {
    // GET /news
    

    search(req, res) {
        //console.log(req.body)
        res.render('search');
    }

    show(req, res){
        res.render('home')
    }
}

module.exports = new SiteController();
