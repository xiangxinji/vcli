// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports.resolveRootDir = (filename) => path.resolve(`./${filename}`);
module.exports.resolveEntryDir = (fileName = '') => path.resolve(`./src/${fileName}`);
module.exports.resolveOutput = () => path.resolve('./dist');
module.exports.resolvePublic = (fileName = '') => path.resolve(`./public/${fileName}`);
