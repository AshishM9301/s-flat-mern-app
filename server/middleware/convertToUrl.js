const convertToSlug = (Text) => {
  if (typeof Text === "string" || Text instanceof String) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
};
module.exports = convertToSlug;
