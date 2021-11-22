const Supplier = require("../models/supplier");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {jwtSecret, jwtExpire} = require("../config/keys");


exports.signupController = async (req, res) => {
   const {supplierName,password,contactNumber,email} = req.body;

   try{
       const supplier = await Supplier.findOne({supplierName});
       if(supplier){
           return res.status(400).json({
               errorMessage: "User already exists"
           });
       }

       const newSupplier = new Supplier();
       newSupplier.supplierName = supplierName;

       const salt = await bcrypt.genSalt(10);
       newSupplier.password = await bcrypt.hash(password, salt);
       newSupplier.contactNumber = contactNumber;
       newSupplier.email = email;

       await newSupplier.save();

       res.json({
           successMessage : "Registration success.Now you can signin.",
       });

   }catch(err){
       console.log("signup controller error:", err);
       res.status(500).json({
           errorMessage: "server error",
       });

   }
};

exports.signinController = async (req, res) => {
    const { _id, password } = req.body;
    try{
        const supplier = await Supplier.findOne({_id});

        if(!supplier){
            return res.status(400).json({
                errorMessage: "invalid credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, supplier.password);
        if(!isMatch){
            return res.status(400).json({
                errorMessage: "invalid credentials",
            })
        }

        const payload = {
            supplier : {
                _id : supplier._id,
            },
        };

        jwt.sign(payload, jwtSecret, {expiresIn : jwtExpire}, (err, token) => {
            if(err)console.log("jwt error :", err);
            const { _id,supplierName, contactNumber, email } = supplier;

            res.json({
                token,
                supplier : { _id, supplierName, contactNumber, email },
            });
        });

    }catch(err){
        console.log("signin controller error :", err);
        res.status(500).json({
            errorMessage: "server error",
        });

    }

};

