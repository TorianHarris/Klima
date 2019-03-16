const db = require("../models");
const log = console.log;
const validate = require("../helpers/validation");
const bcrypt = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");
const noaa = require("./externalApis");

module.exports = function(app) {
  // userSignIn
  app.post("/signin", (req, response) => {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      bcrypt
        .checkPass(req.body.password, user.password)
        .then(res => {
          if (res.status === 200) {
            jwt.sign({ user }, "secretkey", (err, token) => {
              return response
                .status(200)
                .json({ token })
                .redirect("/");
            });
            //TODO write code for storing and checking cookies
          } else {
            return response.json("Something went wrong");
          }
        })
        .catch(error => {
          respose.json(error);
        });
    });
  });
  //TODO write middleware for preventing double sign-up
  //USER sign-up
  app.post("/signup", (req, response) => {
    bcrypt.newPass(req.body.password).then(function(res) {
      log(res);
      if (res.status === 200) {
        db.User.create({
          email: req.body.email,
          password: res.passwordHash,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        }).then(newUserData => {
          if (res.status === 200) {
            jwt.sign({ newUserData }, "secretkey", (err, token) => {
              return response
                .status(200)
                .json({
                  token,
                  email: newUserData.email
                })
                .redirect("/main");
            });
          } else {
            return response.status(404).json({ message: "Failed at line 59" });
          }
        });
      } else {
        response.json({ error: "Something Went Wrong 62" });
      }
    });
  });
  //Get all comments
  app.get("/comment/:zip", (req, res) => {
    let zip = req.params.zip;
    db.Comment.findAll({
      where: {
        zipcode: zip
      }
    }).then(dbComments => {
      res.json(dbComments);
    });
  });
  //New Comment
  app.post("/comment", (req, res) => {
    db.Comment.create(req.body).then(newUserData => {
      res.json(newUserData);
    });
  });
  //Get all favorites
  app.get("/favorite/:uuid", (req, res) => {
    let uuid = req.params.uuid;
    db.Favorite.findAll({
      where: {
        userId: uuid
      }
    }).then(dbComments => {
      res.json(dbComments);
    });
  });
  //New Favorite
  app.post("/favorite", (req, res) => {
    db.Favorite.create(req.body).then(newUserData => {
      res.json(newUserData);
    });
  });

  app.get("/climatedata/:zipcode", (req, response) => {
    noaa.getLatLong(req.params.zipcode, req, response, noaa.getNoaa);
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
