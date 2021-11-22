const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

 
    totalPrice :{
        type : String,
        required : true
        
    },
    orderDate :{
        type : String,
        required : true
       
    },
    orderStatus :{
        type : String,
       
    },
    amount :{
        type : String,
        required : true
       
    },
    itemCode :{
        type : String,
        required : true
      
    },
    supplierID :{
        type : String,
        required : true
       
    },
    billID :{
        type : String,
        required : true
       
    }
})

const supplierorders = mongoose.model("supplierorders", orderSchema);

module.exports = supplierorders;
