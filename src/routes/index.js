const newsRouter = require("./news");
const meRouter = require("./me");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const itemRouter = require("./item");
const blogRouter = require("./blog");

function route(app) {
  app.use("/blog", blogRouter);
  app.use("/me", meRouter);
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/categories", itemRouter);

  app.use("/", siteRouter);
  app.use("/search", siteRouter);
}

module.exports = route;
