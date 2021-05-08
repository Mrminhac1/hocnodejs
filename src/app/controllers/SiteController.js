
const Product = require('../models/Product')
const Hero = require('../models/Hero');
const { multipleMongooseToObject } = require('../../util/mongoose');

const perPage = 6;
class SiteController {
  // Get
  index(req, res, next) {
    // res.render('home');
    
   
    Product.find({})
      .limit(perPage)     
      .then(
        products => { 
        res.render('home',{
          products : multipleMongooseToObject(products),
        })
      })
      .catch(next);
  }

  //GET /Search
  search(req, res) {
    res.render('Search');
  }

  //GET /login
  login(req, res) {
    res.render('Login/login');
  }

  //GET /signup
  signup(req, res) {
    res.render('Login/signup');
  }

}

module.exports = new SiteController();
