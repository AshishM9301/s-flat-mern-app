const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const VerifiedUser = require("../../models/VerifiedUser");
const generateToken = require("../../services/token");
const { ObjectId } = require("mongoose").Schema.Types;

const me = async (req, res, next) => {
  try {
    const { _id, email } = req.user;

    const checkUser = await User.findOne({
      _id: ObjectId(_id),
      email: email,
    });

    if (checkUser && !checkUser.verified) {
      let response = {
        _id: checkUser._id,
        firstName: checkUser.firstName,
        lastName: checkUser.lastName,
        email: checkUser.email,
        role: checkUser.role,
      };

      const { accessToken, refreshToken } = generateToken(response);

      return res.status(200).json({
        success: true,
        message: "token regenreted for Not Verified",
        data: response,
        accessToken,
        refreshToken,
      });
    }

    const checkVerifiedUser = VerifiedUser.findOne({
      _id: ObjectId(_id),
      email: email,
    });

    if (!checkVerifiedUser) {
      throw createHttpError.NotFound("User Not found");
    }

    let response = {
      _id: checkVerifiedUser._id,
      firstName: checkVerifiedUser.firstName,
      lastName: checkVerifiedUser.lastName,
      email: checkVerifiedUser.email,
      role: checkVerifiedUser.role,
    };

    const { accessToken, refreshToken } = generateToken(response);

    return res.status(200).json({
      success: true,
      message: "Token generated for Verified User",
      data: response,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = me;
