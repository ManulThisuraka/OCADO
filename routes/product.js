
const express = require('express');
const product = require('../models/supplierproduct');
const router = express.Router();



router.post('/supply/item/save', (req, res) => {

    let newProducts = new product(req.body);

    newProducts.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Product details are added successfully"
        });
    });
});


router.get('/supplier/products/get', (req, res) => {
    product.find().exec((err,product) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProducts:product
        });
    });
});


router.get("/supplier/product/:id",(req, res) =>{
    let productId = req.params.id;
    product.findById(productId,(err, product) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            product
        });
    });
});

router.get('/supplier/myproduct/get:id', (req, res) => {
    product.findById({supplierID:'61611a1e95876c23c4e7e304'}).exec((err,product) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProducts:product
        });
    });
});


router.put("/supplier/product/update/:id", (req, res) => {
    product.findByIdAndUpdate(
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



router.delete('/supplier/product/delete/:id', (req, res) => {
    product.findByIdAndRemove(req.params.id).exec((err, deleteProduct) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull", err
        });
        return res.json({
            message:"Delete Successfully !!!", deleteProduct
        });
    });
});


module.exports = router;