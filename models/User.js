const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    contactnumber:{
        type:Number,
        required:true
    },

    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:1
    },
},
        {timestamps:true}


);
const  User =mongoose.model('User',UserSchema);


module.exports=User;