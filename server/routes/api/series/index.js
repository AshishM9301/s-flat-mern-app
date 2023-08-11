const express = require("express");

const validate = require("../../../middleware/validate");
const admin = require("../../../middleware/admin");

const { addSeries, allSeries } = require("../../../controller");

const router = express.Router();

router.post("/add", validate, admin, addSeries);
router.get("/", allSeries);
// router.get("/:slug", allProducts);

module.exports = router;
