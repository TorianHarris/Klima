const db = require("../models");
const log = console.log;
const validate = require("../helpers/validation");

module.exports = function(app) {
  // userSignIn
  app.post("/signin", (req, res) => {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (req.body.password !== user.password) {
          return res.send("Invalid password");
          //TODO fidure out status code
        }
        res.status(200).redirect("/main");
      })
      .catch(error => {
        res.send(error);
      });
  })
  //TODO write middleware for preventing double sign-up
  //USER sign-up
  app.post("/signup", (req, res) => {
    db.User.create(req.body).then(newUserData => {
      res.json(newUserData);
    });
  });
  //New Comment
  app.post("/comment", (req, res) => {
    db.Comment.create(req.body).then(newUserData => {
      res.json(newUserData);
    });
  });
  //New Favorite
  app.post("/favorite", (req, res) => {
    db.Favorite.create(req.body).then(newUserData => {
      res.json(newUserData);
    });
  });
  // app.delete
  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
