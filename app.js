//Require the necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { categories } = require("./articleData");

//Create an instance of an express app
const app = express();

//Add body-parser and ejs to the app
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//Use the public directory for static files
app.use(express.static("public"));

//Connect mongoose to db
mongoose.connect("mongodb://localhost:27017/newsDB");

//Create article schema
const articleSchema = new mongoose.Schema({
  writer: String,
  title: String,
  category: String,
  description: String,
  content: String,
});

//Create article model
const Article = mongoose.model("Article", articleSchema);

//Root route, home page
app.get("/", function (req, res) {
  res.render("home");
});

//Main page with all the news
app.get("/news", function (req, res) {
  Article.find(function (err, articles) {
    if (!err) {
      res.render("news", { articles: articles, categories: categories });
    }
  });
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
  //Get the form data the user entered and assign to a new instance of an article model
  const article = new Article({
    writer: req.body.writer,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    content: req.body.content,
  });

  //Save the new article to the database and go to the main news page.
  article.save();
  res.redirect("/news");
});

//Route to look at content for each individual article
app.get("/articles/:id", function (req, res) {
  //Get id from the url
  const articleId = req.params.id;
  Article.findById(articleId, function (err, article) {
    if (!err) {
      res.render("article", { article: article });
    }
  });
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

    Article.find({ category: category }, function (err, articles) {
      if (!err) {
        //Render the page with those specific articles
        res.render("category", {
          articles: articles,
          category: category,
        });
      }
    });
  }
});

//Set app to await for requests on port 3000
app.listen(3000, function () {
  console.log("App listening on port 3000");
});
