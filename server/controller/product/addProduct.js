const convertToSlug = require("../../middleware/convertToUrl");
const Category = require("../../models/Category");
const Color = require("../../models/Color");
const Product = require("../../models/Product");
const { v4: uuidv4 } = require("uuid");
const createHttpError = require("http-errors");
const Series = require("../../models/Series");

const addProduct = async (req, res, next) => {
  try {
    const {
      seriesId,
      categoryId,
      colors,
      name,
      productDesc,
      // productCode,
      productDetails,
      specs,
    } = req.body;

    const series = await Series.find({ _id: seriesId });

    // if (!series) {
    //   throw createHttpError.NotFound("No Series Found");
    // }

    const category = await Category.find({ _id: categoryId });

    if (!category) {
      throw createHttpError.NotFound("No Series Found");
    }

    if (!colors) {
      throw createHttpError.NotFound("No Colors Found");
    }

    const AllColors = JSON.parse(colors);

    if (Array.isArray(AllColors)) {
      throw createHttpError.NotFound("All Colors is Not in Array");
    }

    if (name || productDesc || productDetails || specs) {
      throw createHttpError.NotFound("Some Details are not provided");
    }

    const productCode = uuidv4();
    let slug = convertToSlug(name);

    let checkSlug = await Product.find({ slug: slug });
    do {
      slug = convertToSlug(name + checkSlug.length);

      checkSlug = await Product.find({ slug: slug });
    } while (checkSlug.length > 0);

    const newProduct = new Product({
      slug,
      name,
      productDesc,
      productDetails: JSON.parse(productDetails),
      specs: JSON.parse(specs),
      seriesId,
      category,
      productCode,
      colors: AllColors,
      series,
    });

    await newProduct.save();

    res.status(200).json({
      success: true,
      message: "Product Added",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = addProduct;
