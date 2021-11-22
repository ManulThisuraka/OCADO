const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDB = require("./database/db");
const bodyparser = require('body-parser')
const authRoutes = require("./routes/auth");
const supplierOrderRoutes = require("./routes/order");
const supplierRoutes = require("./routes/suppliers");
const supplierProductRoutes = require("./routes/product");
const bodyParser = require("body-parser");

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use(supplierOrderRoutes);
app.use(supplierRoutes);
app.use(supplierProductRoutes);

connectDB();



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up running on port: ${PORT}`)
})




