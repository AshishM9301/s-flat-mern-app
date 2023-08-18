const fs = require("fs");
const join = require("path").join;
const path = require("path");
const formidable = require("formidable");
const createHttpError = require("http-errors");
const { HOST, PORT } = require("../config");

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

// const multerFilter = (req, file, cb) => {
//   if (
//     ["jpg", "svg", "jpeg", "png"].find(
//       (val) => val === file.mimetype.split("/")[1]
//     )
//   ) {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a Image File"), false);
//   }
// };
// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

// const uploadSingleFiles = async (req, res, next) => {
//   try {
//     upload.single(req.fileds)(req, res, (err) => {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading.
//         res
//           .status(500)
//           .send({
//             error: { message: `Multer uploading error: ${err.message}` },
//           })
//           .end();
//         return;
//       } else if (err) {
//         // An unknown error occurred when uploading.
//         if (err.name == "ExtensionError") {
//           res
//             .status(413)
//             .send({ error: { message: err.message } })
//             .end();
//         } else {
//           res
//             .status(500)
//             .send({
//               error: { message: `unknown uploading error: ${err.message}` },
//             })
//             .end();
//         }
//         return;
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: "Error :" + err,
//     });
//   }
// };

// const uploadMultiFiles = async (req, res, next) => {
//   try {
//     upload.array("uploadFile")(req, res, (err) => {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading.
//         res
//           .status(500)
//           .send({
//             error: { message: `Multer uploading error: ${err.message}` },
//           })
//           .end();
//         return;
//       } else if (err) {
//         // An unknown error occurred when uploading.
//         if (err.name == "ExtensionError") {
//           res
//             .status(413)
//             .send({ error: { message: err.message } })
//             .end();
//         } else {
//           res
//             .status(500)
//             .send({
//               error: { message: `unknown uploading error: ${err.message}` },
//             })
//             .end();
//         }
//         return;
//       }
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: "Error :" + err,
//     });
//   }
// };

const isFileValid = (file) => {
  const type = file?.mimetype;
  // console.log(type);
  const validTypes = ["image/jpg", "image/jpeg", "image/png"];
  if (validTypes.indexOf(type) === -1) {
    return false;
  }
  return true;
};

const uploadFile = async (files) => {
  console.log(files);
  const uploadFolder = path.join("server/assets/images");

  if (files?.images?.length < 1) {
    //Single file

    const file = files.images;

    // checks if the file is valid
    const isValid = isFileValid(file);

    // console.log(isValid);

    // creates a valid name by removing spaces
    const fileName = encodeURIComponent(
      file?.originalFilename?.replace(/\s/g, "-")
    );

    if (!isValid) {
      // throes error if file isn't valid
      throw createHttpError.Unauthorized("Failed");
    }
    try {
      // renames the file in the directory
      return fs.renameSync(file.filepath, join(uploadFolder, fileName));
    } catch (error) {
      console.log(error);
    }
  } else {
    // Multiple files
    // console.log(files.images);

    let images = [];
    for (let i = 0; i < files.images.length; i++) {
      const file = files.images[i];

      // checks if the file is valid
      const isValid = isFileValid(file);

      // console.log(...files.images[i]);

      // creates a valid name by removing spaces
      const fileName = encodeURIComponent(
        file?.originalFilename?.replace(/\s/g, "-")
      );

      if (!isValid) {
        // throes error if file isn't valid
        throw createHttpError.Unauthorized("Failed");
      }

      try {
        // renames the file in the directory

        fs.renameSync(file.filepath, join(uploadFolder, fileName));
        images.push("http://" + HOST + ":" + PORT + "/api/images/" + fileName);
      } catch (error) {
        console.log(error);
      }
    }

    return images;
  }

  // console.log(fields, files);
};

module.exports = { uploadFile };
