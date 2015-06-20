var REPL = require("repl");
var db = require("./models");

varrepl = REPL.start("Todo > ");
repl.context.db = db;

repl.on("exit", function () {
  console.log("GOODBYE!!");
  process.exit();
});