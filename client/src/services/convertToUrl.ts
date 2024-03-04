export const convertToSlug = (Text: string) => {
  if (typeof Text === "string" || Text instanceof String) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
};
