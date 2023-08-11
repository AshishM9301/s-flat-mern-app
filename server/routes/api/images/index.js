const fs = require("fs");
const express = require("express");
const path = require("path");
const url = require("url");
const router = express.Router();

const images = (req, res, next) => {
  const request = url.parse(req.url, true);

  // Extracting the path of file
  const action = request.pathname;

  // Path Refinements
  const filePath = path
    .join(__dirname, "../../../assets/images", action)
    .split("%20")
    .join(" ");

  console.log(filePath);

  // Checking if the path exists
  fs.exists(filePath, function (exists) {
    if (!exists) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("404 Not Found");
      return;
    }

    // Extracting file extension
    const ext = path.extname(action);

    // Setting default Content-Type
    let contentType = "text/plain";

    // Checking if the extension of
    // image is '.png'
    if (ext === ".jpg") {
      contentType = "image/jpg";
    } else if (ext === ".png") {
      contentType = "image/png";
    }

    // Setting the headers
    res.writeHead(200, {
      "Content-Type": contentType,
    });

    // Reading the file
    fs.readFile(filePath, function (err, content) {
      // Serving the image
      res.end(content);
    });
  });
};

router.get("/*", images);

module.exports = router;
