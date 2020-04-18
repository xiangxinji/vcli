const path = require("path");

module.exports.resolveRootDir = () => {
  return path.resolve("./");
};
module.exports.resultEntryDir = (fileName = "") => {
  return path.resolve("./src/" + fileName);
};
module.exports.resolveOutput = () => {
  return path.resolve("./dist");
};
module.exports.resolvePublic = (fileName = "") => {
  return path.resolve("./public/" + fileName);
};
