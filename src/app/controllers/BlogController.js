

class BlogController {

    //GET /blog
    blog(req, res) {
      res.render('Blogs/blog');
    }

    //GET /blog/:lug
    show(req, res) {
        res.render('Blogs/blog-detail');
    }
}
  
  module.exports = new BlogController();