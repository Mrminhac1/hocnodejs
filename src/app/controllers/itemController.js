const Product = require("../models/Product");
const { multipleMongooseToObject } = require("../../util/mongoose");

const PAGE_SIZE = 10;

class itemController {
  //GET new/:slug
  index(req, res, next) {
    var page = req.query.page;
    if (page) {
      // Get Page
      page = parseInt(page);

      if(page < 0) {
        page = 1;
      }
      var skip = (page - 1) * PAGE_SIZE;
      
      
      Product.find({})
      .skip(skip)
      .limit(PAGE_SIZE)
      .then((products) => {
        res.render("category", {
          product: multipleMongooseToObject(products),
        });

        Product.countDocuments({})
        .then((total) =>
          {
            var tongSoPage = Math.ceil(total / PAGE_SIZE);

            res.json({
              total: total,
              tongSoPage: tongSoPage,
              products,
            })
          }
        ) 
      })
      .catch(next);

    } else {
      // Get All
      Product.find({})
        .then((products) => {
          res.render("category", {
            product: multipleMongooseToObject(products),
          });
        })
        .catch(next);
    }
  }
}

module.exports = new itemController();
