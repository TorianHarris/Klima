var db = require("../models");
var path = require("path");
const validate = require("../helpers/validation");
const jwt = require("jsonwebtoken");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    //TODO write code for checking for login token
    res.sendFile(path.join(__dirname, "../public/html/", "index.html"));
    // db.Example.findAll({}).then(function (dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  // Load main page
  app.get("/main", validate.verifyToken, function(req, response) {
    //TODO investigate usin parameters and conditionals to secure the routes
    let isVaild = true;
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        response.send(403).json({ message: "GET main failed" });
      } else {
        isValid = true;
      }
    });
    if (isVaild) {
      response.status(200).json({
        message: "Success!!!",
        redirectUrl: "/main/loggedin/"
      });
    }
  });

  app.get("/main/:*", (req, response) => {
    let localPath = path.join(__dirname, "../public/html/", "main.html");
    response.sendFile(localPath);

    // response.status(403).json({ message: "No Token Present" });
  });
  //   app.get("/main/comments/:zipcode", (req, response) => {
  //  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
