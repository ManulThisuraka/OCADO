
const express = require('express');
const supplier = require('../models/supplier');
const router = express.Router();


router.post('/supplier/save', (req, res) => {

    let newSupplier = new supplier(req.body);

    newSupplier.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Supplier details are saved successfully"
        });
    });
});


router.get('/suppliers/get', (req, res) => {
    supplier.find().exec((err,suppliers) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSuppliers:suppliers
        });
    });
});



router.get("/supplier/get/:id",(req, res) =>{
    let supplierId = req.params.id;
    supplier.findById(supplierId,(err, supplier) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            supplier
        });
    });
});



router.put("/supplier/update/:id", (req, res) => {
    supplier.findByIdAndUpdate(
        req.params.id, 
        {
            $set:req.body
        },
        (err, data) => {
            if(err) {
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


router.delete('/supplier/delete/:id', (req, res) => {
    supplier.findByIdAndRemove(req.params.id).exec((err, deleteSupplier) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull", err
        });
        return res.json({
            message:"Delete Successfully !!!", deleteSupplier
        });
    });
});


module.exports = router;