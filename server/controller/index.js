const verify = require("./auth/verify");
const login = require("./auth/login");
const register = require("./auth/register");
const auth = require("./auth/auth");
const googleLogin = require("./auth/googleLogin");
const facebookLogin = require("./auth/facebookLogin");

const addProduct = require("./product/addProduct");
const allProducts = require("./product/allProducts");
const getProduct = require("./product/getProduct");
const addCategory = require("./category/addCategory");
const addSeries = require("./series/addSeries");
const allCategory = require("./category/allCategory");
const allSeries = require("./series/allSeries");
const me = require("./auth/me");
const myProducts = require("./product/myProducts");
const deleteProduct = require("./product/deleteProduct");
const deleteCategory = require("./category/deleteCategory");
const addFavouriteCategory = require("./category/addFavouriteCategory");
const removeFavouriteCategory = require("./category/removeFavouriteCategory");

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
  myProducts,
  deleteProduct,
  getProduct,

  addCategory,
  allCategory,
  deleteCategory,
  addFavouriteCategory,
  removeFavouriteCategory,

  addSeries,
  allSeries,
};
