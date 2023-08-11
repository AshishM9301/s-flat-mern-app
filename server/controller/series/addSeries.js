const Series = require("../../models/Series");

const addSeries = (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return createHttpError.NotFound("Please Enter Category Name");
    }

    const checkSeriesName = Series.find({ name: name });

    if (checkSeriesName.length > 0) {
      return createHttpError.Unauthorized(
        "Already Category Preset with that name"
      );
    }

    const newSeries = new Series({
      name: name,
    });

    newSeries.save();

    res.status(200).json({
      success: true,
      message: "Added New Castgory",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = addSeries;
