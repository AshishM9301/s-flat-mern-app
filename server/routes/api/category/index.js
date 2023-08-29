const express = require("express");

const validate = require("../../../middleware/validate");
const admin = require("../../../middleware/admin");

const {
  addCategory,
  allCategory,
  deleteCategory,
  addFavouriteCategory,
  removeFavouriteCategory,
} = require("../../../controller");

const router = express.Router();

router.post("/add", validate, addCategory);
router.get("/", allCategory);
router.delete("/:id", deleteCategory);
router.get("/:slug", allCategory);
router.post("/favourite/add/:id", validate, addFavouriteCategory);
router.post("/favourite/remove/:id", validate, removeFavouriteCategory);

module.exports = router;
