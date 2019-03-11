const bcrypt = require("bcrypt");
<<<<<<< HEAD
const saltRounds = 10;
const password = "password";
const passwordHash =
  "$2b$10$etMnYZsB7N0S/6HhGEFPGOsqaxw9cZEdQxvX7x8kJf1GcceDfhZvW";
//let passwordHash = "";
//const otherpassword = "notBacon";
let result = "";

// Check the password
const checkPass = password => {
  bcrypt.compare(password, passwordHash, (err, res) => {
    if (err) {
      throw res.status(500).json({
        login: false,
        error: "Internal server error. Failed to compare password."
      });
    } else {
      if (res) {
        res.status(200).json({
          login: true
        });
      } else {
        res.status(403).json({
          login: false,
          error: "Forbiden."
        });
      }
=======

// Check the password
const checkPass = (password, passwordHash) => {
  return new Promise((res, rej) => {
    try {
      bcrypt.compare(password, passwordHash, (err, result) => {
        if (result) {
          res(
            JSON.stringify({
              status: 200,
              login: true
            })
          );
        } else {
          res(
            JSON.stringify({
              status: 403,
              login: false
            })
          );
        }
      });
    } catch (err) {
      rej(
        JSON.stringify({
          status: 403,
          error: "Forbidden." + err,
          login: false
        })
      );
>>>>>>> 65487c1488040f3e12e9ef9ed4c71d931cbdccc2
    }
  });
};

<<<<<<< HEAD
module.exports = checkPass(password);
=======
module.exports = { checkPass };
>>>>>>> 65487c1488040f3e12e9ef9ed4c71d931cbdccc2
