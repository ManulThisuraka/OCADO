const mongoose = require("mongoose");

const departureSchema = new mongoose.Schema({
    cartId :{
        type : String,
        required : true
    },
    productCode :{
        type : String,
        required : true
    },
    dDate :{
        type : String,
        required : true
    },
    quantity :{
        type : Number,
        required : true
    },
    driverId :{
        type : String,
        required : true
    }
})


module.exports = mongoose.model("WH_Departures",departureSchema);