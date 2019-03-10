const bcrypt = require("bcrypt");
const saltRounds = 10;

let result = "";

// Hash a password, on error, set login to false
const newPass = password => {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      throw (result = JSON.stringify({
        login: false,
        error: "Internal server error. Failed to hash password."
      }));
    } else {
      result = JSON.stringify({ passwordHash: hash, login: true });
    }
    module.exports = result;
  });
};

module.exports = newPass(password);
