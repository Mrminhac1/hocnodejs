const Course = require('../models/Course');
class SiteController {
  // Get
  index(req, res) {

    Course.find({}, function(err,courses) {
      if(!err) {
        res.json(courses);
      } else {
        res.status(404).json({ error: 'Error'});
      }
    });
    // res.render('home');

  }

  //GET /Search
  search(req, res) {
    res.render('Search');
  }
}

module.exports = new SiteController();
