const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({


    productName :{
        type : String,
        required : true

      
    },
    salePrice :{
        type : String,
        required : true
   
    },
    supplierID :{
        type : String,
        required : true
       
    }
})

const supplierproduct = mongoose.model("supplierproduct", productSchema);

module.exports = supplierproduct;