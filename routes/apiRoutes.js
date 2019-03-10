var db = require("../models");
const log = console.log;

module.exports = function(app) {
  // userSignIn
  app.post("/signin", (req, res) => {
    let isEmpty = false;
    let body = req.body;
    log(req.body);
    for (x in body) {
      if (body[x] === "") {
        isEmpty = true;
        console.log("body is empty");
      }
    }
    if (!isEmpty) {
      db.User.findAll({
        where: {
          email: req.body.email
        }
      })
        .then(user => {
          if (req.body.password !== user.password) {
            return res.status().send("Invalid password");
          }
          res.status(200).json(user);
        })
        .catch(error => {
          res.send(error);
        });
    }
  });

  //USER sign-up
  app.post("/signup", (req, res) => {
    db.User.create(req.body).then(newUserData => {
      res.json(newUserData);
    });
  });
  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
