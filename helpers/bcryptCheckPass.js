const bcrypt = require("bcrypt");

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
    }
  });
};

module.exports = { checkPass };
