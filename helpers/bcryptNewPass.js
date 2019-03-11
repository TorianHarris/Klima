const bcrypt = require("bcrypt");
const saltRounds = 10;

// Hash a password, on error, set login to false

function newPass(password) {
  return new Promise((res, rej) => {
    try {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        res(
          JSON.stringify({
            status: 200,
            passwordHash: hash,
            login: true
          })
        );
      });
    } catch (err) {
      rej(
        JSON.stringify({
          status: 500,
          login: false,
          error: "Internal server error. Failed to hash password."
        })
      );
    }
  });
}

module.exports = { newPass };
