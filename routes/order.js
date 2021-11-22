const express = require('express');
const orders = require('../models/supplierorders');
const router = express.Router();


router.post('/supplier/order/save', (req, res) => {

    let newOrders = new orders(req.body);

    newOrders.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Order details are saved successfully"
        });
    });
});

router.get('/supplier/orders/get', (req, res) => {
    orders.find().exec((err,orders) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrders:orders
        });
    });
});

router.get('/supplier/order/get/', (req, res) => {
    orders.findOne({buisnessID:''}).exec((err,orders) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrders:orders
        });
    });
});


router.get("/supplier/order/:id",(req, res) =>{
    let orderId = req.params.id;
    orders.findById(orderId,(err, orders) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({
            success:true,
            orders
        });
    });
});



router.put("/supplier/order/update/:id", (req, res) => {
    orders.findByIdAndUpdate(
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


router.delete('/supplier/order/delete/:id', (req, res) => {
    orders.findByIdAndRemove(req.params.id).exec((err, deleteOrder) => {
        if(err) return res.status(400).json({
            message:"Delete unsuccessfull", err
        });
        return res.json({
            message:"Delete Successfully !!!", deleteOrder
        });
    });
});


module.exports = router;