const express = require("express");

const validate = require("../../../middleware/validate");
const admin = require("../../../middleware/admin");

const { addCategory, allCategory } = require("../../../controller");

const router = express.Router();

router.post("/add", validate, admin, addCategory);
router.get("/", allCategory);
router.get("/:slug", allCategory);

module.exports = router;
