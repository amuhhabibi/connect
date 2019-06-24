
var server = require("./libs/server");
var color = require("./libs/color");

console.log(color.red, "Hello Master ;D");

server.init(3000, "project21", color.green);
