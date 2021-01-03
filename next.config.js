const path = require("path");
module.exports = {
  target: "serverless",
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    config.node = {
      ...config.node,
      __filename: true,
      __dirname: true,
    };
    return config;
  },
};
