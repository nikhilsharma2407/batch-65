const errorHandler = (err, req, res, next) => {
  console.log("error handler");
  console.log(err);
  console.log(err.code);

  if (err.message === "jwt expired") {
    err.status = 401;
    err.message = "Session expired, Please login to continue";
  }
  
  if (err.code === 11000) {
    err.status = 409;
    if (err.keyPattern.username) {
      err.message = "Username already exists";
    } else if (err.keyPattern.email) {
      err.message = "Email already exists";
    }
  }

  res.status(err.status || 500);
  res.send({ success: false, message: err.message });
};

module.exports = errorHandler;
