const validateRequest = (req, cb) => {
  let isEmpty = false;
  let body = req.body;
  for (x in body) {
    if (body[x] === "" || undefined) {
      isEmpty = true;
    }
  }
  return !isEmpty ? cb(req) : res.send("All Fields Must Be Filled");
};

module.exports = {
  validateRequest: validateRequest
};
