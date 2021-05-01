
class SiteController {
    
    // Get 
    index(req, res) {
        res.render('home'); 
    }

    //GET /Search
    search(req, res) {
        res.render('Search'); 
    }

}

module.exports = new SiteController;