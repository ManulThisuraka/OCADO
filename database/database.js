const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbAdmin:admin123@ocado.ds9sc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
