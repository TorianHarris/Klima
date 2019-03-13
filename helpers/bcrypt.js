const bcrypt = require("bcrypt");
const saltRounds = 10;

// Hash a password, on error, set login to false

function newPass(password) {
  return new Promise((res, rej) => {
    try {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        res({
          status: 200,
          passwordHash: hash,
          login: true
        });
      });
    } catch (err) {
      rej({
        status: 500,
        login: false,
        error: "Internal server error. Failed to hash password."
      });
    }
  });
}

// Check the password
const checkPass = (password, passwordHash) => {
  return new Promise((res, rej) => {
    try {
      bcrypt.compare(password, passwordHash, (err, result) => {
        if (result) {
          res({
            status: 200,
            login: true
          });
        } else {
          res({
            status: 403,
            login: false
          });
        }
      });
    } catch (err) {
      rej({
        status: 403,
        error: "Forbidden." + err,
        login: false
      });
    }
  });
};

module.exports = {
  newPass: newPass,
  checkPass: checkPass
};
