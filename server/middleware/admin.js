const jwt = require("jsonwebtoken");
var config = require("../config");

const admin = async (req, res, next) => {
  try {
    if (!req?.user || req?.user?.role !== "Admin") {
      res.status(402).json({ message: "Not an Admin" });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Not an Admin" });
  }
};

module.exports = admin;
