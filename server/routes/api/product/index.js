const express = require("express");

const validate = require("../../../middleware/validate");
const admin = require("../../../middleware/admin");

const { addProduct, allProducts } = require("../../../controller");

const router = express.Router();

router.post("/add", validate, admin, addProduct);
router.get("/all", allProducts);
router.get("/:slug", allProducts);

module.exports = router;
