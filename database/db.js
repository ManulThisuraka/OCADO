const mongoose = require("mongoose");

connectDB = async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://dbAdmin:admin123@ocado.ds9sc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser:true,
            useUnifiedTopologyL:true,
        });
        console.log("Mongodb Connection success");
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB;