const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
let arrivals = require("../models/arrivals");

const createArrival = async (req, res, next) => {

    console.log(req.body);
    console.log(req.file);
    const data = req.body;


    const newArrival = new arrivals(data);
    newArrival.save().then(() => {
        res.json({ success: "Arrival added" });
    }).catch((err) => {
        console.log(err);
    })

}
module.exports = { createArrival }