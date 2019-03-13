const validateRequest = req => {
  return new Promise((resolve, reject) => {
    let isEmpty = false;
    let body = req.body;
    for (x in body) {
      if (body[x] === "" || undefined) {
        isEmpty = true;
      }
    }
    if (isEmpty) {
      resolve(req);
    } else {
      reject({
        status: 500,
        login: false,
        error: "All Fields Must Be Filled Out"
      });
    }
  });
};

const verifyToken = (req, response, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    response.status(403);
  }
};

module.exports = {
  validateRequest,
  verifyToken
};
