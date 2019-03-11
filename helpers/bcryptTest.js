const bcryptNewPass = require("./bcryptNewPass.js");
// let password = <whatever is coming in from the form>
let password = "password1234";
bcryptNewPass
  .newPass(password)
  .then(function(res) {
    /* 
    res is the object returned in the format:
    {
        "status": 200
        "passwordHash": "$2b$10$gibberish...""
        "login": true
    }

    So, the code should probably look something like this:
    res = JSON.parse(res);
    if (res.status === 200) {
        Insert username, res.passwordHash, etc... into the database
        if (res.login) {
            // Generate token & cookie here...
        }
    } else {
        Epic fail!
    }
    */
  })
  .catch(rej => {
    //Shut up, node.
    return rej;
  });
