var express = require("express")();
const connectDB = require("./database/database");

connectDB();

var listener = express.listen(5000, function () {
  console.log("Listening on port " + listener.address().port); //Listening on ${port}
});
