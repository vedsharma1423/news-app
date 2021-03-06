//Require the necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { categories } = require("./articleData");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

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
  date: Date,
  writer: String,
  title: String,
  category: String,
  description: String,
  imageFile: String,
  content: String,
});

//Create article model
const Article = mongoose.model("Article", articleSchema);

//Create User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

//Create user model
const User = mongoose.model("User", userSchema);

//Root route, home page
app.get("/", function (req, res) {
  res.render("home");
});

//Main page with all the news
app.get("/news", function (req, res) {
  Article.find()
    .sort({ date: -1 })
    .exec(function (err, articles) {
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

//Register route
app.get("/register", function (req, res) {
  res.render("register");
});

//Register post request
app.post("/register", function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
    if (!err) {
      User.findOne({ email: email }, function (error, user) {
        if (user) {
          console.log("Email already exists");
          res.redirect("register");
        } else {
          const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
          });
          newUser.save();
          res.redirect("/news");
        }
      });
    }
  });
});

//Login route
app.get("/login", function (req, res) {
  res.render("login");
});

//Login post request
app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }, function (err, user) {
    if (!err) {
      bcrypt.compare(password, user.password, function (error, result) {
        if (result === true) {
          res.redirect("/news");
        } else {
          console.log("Incorrect Credentials");
          res.redirect("/login");
        }
      });
    }
  });
});

//new-article route
app.get("/new-article", function (req, res) {
  res.render("newArticle");
});

//Post request at new-article route
app.post("/new-article", upload.single("articleImage"), function (req, res) {
  //Get the form data the user entered and assign to a new instance of an article model
  const article = new Article({
    date: new Date(),
    writer: req.body.writer,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    imageFile: req.file.filename,
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
  } else if (category === "register") {
    res.redirect("/register");
  } else if (category === "login") {
    res.redirect("/login");
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
