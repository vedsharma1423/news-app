//Require the necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { articles, categories } = require("./articleData");

//Create an instance of an express app
const app = express();

//Add body-parser and ejs to the app
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//Use the public directory for static files
app.use(express.static("public"));

let currentId = 8;

//Root route, home page
app.get("/", function (req, res) {
  res.render("home");
});

//Main page with all the news
app.get("/news", function (req, res) {
  res.render("news", { articles: articles, categories: categories });
});

//About route
app.get("/about", function (req, res) {
  res.render("about");
});

//How to route
app.get("/howto", function (req, res) {
  res.render("howto");
});

//Contact route
app.get("/contact", function (req, res) {
  res.render("contact");
});

//new-article route
app.get("/new-article", function (req, res) {
  res.render("newArticle");
});

//Post request at new-article route
app.post("/new-article", function (req, res) {
  //Get the form data the user entered and assign to a new article object
  const article = {
    id: currentId,
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    writer: req.body.writer,
    content: req.body.content,
  };

  //Add the article to array of articles
  articles.push(article);
  currentId++;

  //redirect to the main page
  res.redirect("/news");
});

//Route to look at content for each individual article
app.get("/articles/:id", function (req, res) {
  //Get id from the url
  const articleId = parseInt(req.params.id);

  //Search the article with that id and render the page for that specific article
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].id === articleId) {
      res.render("article", { article: articles[i] });
    }
  }
});

//Route to show all articles of a specific category
app.get("/:category", function (req, res) {
  //Get the category from the url
  const category = req.params.category;

  //Check the category to make sure that it is not the other specified routes
  if (category === "about") {
    res.redirect("/about");
  } else if (category === "howto") {
    res.redirect("/howto");
  } else if (category === "contact") {
    res.redirect("/contact");
  } else {
    //Filter the array of articles to have only articles of a specific category
    const categoryArticles = articles.filter(function (article) {
      return article.category === category;
    });

    //Render the page with those specific articles
    res.render("category", { articles: categoryArticles, category: category });
  }
});

//Set app to await for requests on port 3000
app.listen(3000, function () {
  console.log("App listening on port 3000");
});
