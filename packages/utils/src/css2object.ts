import { camelCase, replace, trim } from "lodash-es";
/**
 * return JSON output for CSS string
 * @param text {String}
 * @returns {Object}
 */
const cssToObject = (text: string) => {
  if (typeof text !== "string") {
    return null;
  }
  const output: any = {};
  try {
    text.split(";").forEach((keyValue) => {
      const style = keyValue.split(":");
      if (style && style.length === 2) {
        output[camelCase(trim(style[0]))] = trim(replace(style[1], /'|"/g, ""));
      }
    });
  } catch (e) {
    return null;
  }
  return output;
};

export default cssToObject;
