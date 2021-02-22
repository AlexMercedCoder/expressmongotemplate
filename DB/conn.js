///////////////////////////
// Environmental Variables
///////////////////////////
require("../envfunc")("env.yaml", "../env.yaml");

/////////////////////////////////////
// MONGOOSE CONNECTION
/////////////////////////////////////
const { MONGODBURI } = process.env;
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;
const {log} = require("mercedlogger")

mongoose.connect(MONGODBURI, config);

DB.on("open", () => log.green("Mongo","You are connected to Mongo"))
  .on("close", () => log.cyan("Mongo","You are disconnected to Mongo"))
  .on("error", (err) => log.red("Mongo",err));

module.exports = mongoose;
