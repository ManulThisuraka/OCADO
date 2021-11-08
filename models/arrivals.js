const mongoose = require("mongoose");

const arrivalSchema = new mongoose.Schema({
    cartId :{
        type : String,
        required : true
    },
    productCode :{
        type : String,
        required : true
    },
    manufacture :{
        type : String,
        required : true
    },
    aDate :{
        type : String,
        required : true
    },
    quantity :{
        type : Number,
        required : true
    }
})


module.exports = mongoose.model("WH_Arrivals",arrivalSchema);