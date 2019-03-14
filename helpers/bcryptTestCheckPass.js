const bcryptCheckPass = require("./bcryptCheckPass.js");
// let password = <whatever is coming in from the form>
// let passwordHash = <password hash from the database>
let password = "password1234";
let passwordHash =
  "$2b$10$xPdgrMhe8RLR9FsqsDKmYOwnbQzAW9Em4XiHozIbwHAa8Hmd9juVe";

bcryptCheckPass
  .checkPass(password, passwordHash)
  .then(function(res) {
    /* 
    res is the object returned in the format:
    {
        "status": 200
        "login": true
    }

    So, the code should probably look something like this:
    res = JSON.parse(res);
    if (res.status === 200 && res.login) {
      // Generate token & cookie here...
    } else {
      Epic fail!
    }
    */
  })
  .catch(rej => {
    //Shut up, node.
    return rej;
  });
