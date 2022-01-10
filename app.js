const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { articleText, article2Text, article3Text } = require("./articleData");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const categories = [
  "TV and Movies",
  "Music",
  "Science",
  "Technology",
  "Politics",
  "Sports",
  "Business",
  "Reviews",
];

const article = {
  id: 1,
  category: "Music",
  title: "New album by The Weeknd is a hit.",
  description: "About the new album that has taken the world by storm.",
  writer: "Joe Byron",
  content: articleText,
};

const articles = [
  article,
  {
    id: 2,
    category: "TV and Movies",
    title: "Spider-Man No Way Home keeps smashing box office records.",
    description: "The latest of the web slinger's adventure is a success.",
    writer: "Ronald Gump",
    content: article2Text,
  },
  {
    id: 3,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 4,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 5,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 6,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
  {
    id: 7,
    category: "Sports",
    title: "The NFL playoff race is becoming tighter than ever.",
    description:
      "The crazy race in which many teams whose playoff hopes are still alive.",
    writer: "Hom Tolland",
    content: article3Text,
  },
];

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
