module.exports = function () { return require("../env/" + process.env.NODE_ENV.trim() + ".env.js"); };
