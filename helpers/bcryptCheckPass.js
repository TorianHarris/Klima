const bcrypt = require("bcrypt");
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
    }
  });
};

module.exports = checkPass(password);
