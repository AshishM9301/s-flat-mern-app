const createError = require("http-errors");
const addBanner = require("../../../controller/banner/addBanner");
const router = require("express").Router();

router.post("/upload/banner", addBanner);

module.exports = router;
