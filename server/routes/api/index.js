const createError = require("http-errors");
const router = require("express").Router();

const auth = require("./auth/auth");
const product = require("./product");
const images = require("./images");
const category = require("./category");
const series = require("./series");

router.use("/auth", auth);
router.use("/product", product);
router.use("/category", category);
router.use("/series", series);

router.use("/images", images);

router.get("/test", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

module.exports = router;
