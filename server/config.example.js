require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 5000,
  DB: {
    URL: "mongodb://localhost:27017/sflat",
  },
  gmail: {
    //your email id and password
    user: "",
    pass: "",
  },
  accessSecret: "",
  refreshSecret: "",
  google: {
    // get your google google client id from google console
    clientId: "",
    clientSecret: "",
  },
};
