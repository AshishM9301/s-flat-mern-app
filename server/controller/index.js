const verify = require("./auth/verify");
const login = require("./auth/login");
const register = require("./auth/register");
const auth = require("./auth/auth");
const googleLogin = require("./auth/googleLogin");
const facebookLogin = require("./auth/facebookLogin");

const addProduct = require("./product/addProduct");
const allProducts = require("./product/allProducts");
const addCategory = require("./category/addCategory");
const addSeries = require("./series/addSeries");
const allCategory = require("./category/allCategory");
const allSeries = require("./series/allSeries");
const me = require("./auth/me");
const myProducts = require("./product/myProducts");
const deleteProduct = require("./product/deleteProduct");

module.exports = {
  login,
  register,
  verify,
  auth,
  me,
  googleLogin,
  facebookLogin,

  addProduct,
  allProducts,

  addCategory,
  allCategory,
  myProducts,
  deleteProduct,

  addSeries,
  allSeries,
};
