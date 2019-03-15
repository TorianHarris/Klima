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
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        response.send(403).json({ message: "GET main failed" });
      } else {
        response
          .json({
            message: "Success",
            token: req.token,
            authData
          })
          .sendFile(path.join((__dirname, "../public/html", "main.html")));
      }
    });
  });

  //   app.get("/main/comments/:zipcode", (req, response) => {
  //  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
