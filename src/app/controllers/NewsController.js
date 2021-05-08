class NewsController {
  // Get /New
  index(req, res) {
    res.render("news");
  }

  //GET new/:slug
  show(req, res) {
    res.send("newdetail");
  }
}

module.exports = new NewsController();
