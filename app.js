const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { articles } = require("./articleData");
const { categories } = require("./articleData");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

let currentId = 8;

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("news", { articles: articles, categories: categories });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/howto", function (req, res) {
  res.render("howto");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/new-article", function (req, res) {
  res.render("newArticle");
});

app.post("/new-article", function (req, res) {
  const article = {
    id: currentId,
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    writer: req.body.writer,
    content: req.body.content,
  };
  articles.push(article);
  currentId++;
  res.redirect("/news");
});

app.get("/articles/:id", function (req, res) {
  const articleId = parseInt(req.params.id);
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id === articleId) {
      res.render("article", { article: articles[i] });
    }
  }
});

app.get("/:category", function (req, res) {
  const category = req.params.category;
  if (category === "about") {
    res.redirect("/about");
  } else if (category === "howto") {
    res.redirect("/howto");
  } else if (category === "contact") {
    res.redirect("/contact");
  } else {
    const categoryArticles = articles.filter(function (article) {
      return article.category === category;
    });
    res.render("category", { articles: categoryArticles, category: category });
  }
});

app.listen(3000, function () {
  console.log("App listening on port 3000");
});
