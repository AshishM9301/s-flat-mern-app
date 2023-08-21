const express = require("express");

const validate = require("../../../middleware/validate");
const admin = require("../../../middleware/admin");

const {
  addCategory,
  allCategory,
  deleteCategory,
} = require("../../../controller");

const router = express.Router();

router.post("/add", validate, addCategory);
router.get("/", allCategory);
router.delete("/:id", deleteCategory);
router.get("/:slug", allCategory);

module.exports = router;
