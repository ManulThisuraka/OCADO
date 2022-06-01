var express = require("express");
const connectDB = require("./database/database");
const bodyParser = require("body-parser");
const cors = require("cors");
//const expressfileupload = require('express-fileupload');

const app = express();

//Import routes
const arrivalsRouter = require("./routes/arrivals");
const departuresRouter = require("./routes/departures");

//App middleware'
//app.use(expressfileupload());
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(arrivalsRouter);
app.use(departuresRouter);


connectDB();

var listener = app.listen(5000, function () {
  console.log("Listening on port " + listener.address().port); //Listening on ${port}
});
