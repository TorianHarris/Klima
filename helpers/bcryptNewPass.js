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

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
  newPass: newPass,
  result: result
};
=======
module.exports = { newPass };
>>>>>>> 5d97d793e264f46123ddd087853cac24dbea79cb
=======
module.exports = { newPass };
>>>>>>> 65487c1488040f3e12e9ef9ed4c71d931cbdccc2
