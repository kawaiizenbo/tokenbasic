const { Plugin } = require("powercord/entities");
const { getModule } = require("powercord/webpack");

const { getToken } = getModule(["getToken"], false);

module.exports = class Token extends Plugin {
  startPlugin() {
    console.log(getToken());
  }
};
