const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    supplierName :{
        type : String,
        required : true
    },
  
    password :{
        type : String,
        required : true
    },
    
    contactNumber :{
        type : Number,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    role : {
        type : Number,
        default: 0
    },
},
    
    {timestamps:true}
);

const supplier = mongoose.model("supplier", supplierSchema);

module.exports = supplier;