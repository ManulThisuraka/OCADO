const router = require("express").Router();
let arrivals = require("../models/arrivals");
let controller = require('../Controllers/arrivals');

const multer = require("multer");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post('/arrivals/add',controller.createArrival);


router.get("/arrivals/",(req,res)=>{

    arrivals.find().then((arrivalList)=>{
        res.json({
            success:true,
            existingArrivals:arrivalList
        });
    }).catch((err)=>{
        res.json({error:err.message});
    })
})

router.put("/arrivals/update/:id",(req,res)=>{
    
    arrivals.findByIdAndUpdate(req.params.id,
        {
            $set:req.body
        })
    .then(()=>{
        res.status(200).json({success: "Arrival updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error with updating data", error: err.message});
    })
})

router.delete("/arrivals/delete/:id",(req,res)=>{
    arrivals.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).json({status: "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error with delete user", error: err.message});
    })
})

router.get("/arrivals/get/:id",(req,res)=>{
    let userId = req.params.id;
    arrivals.findById(userId)
    .then((arrival)=>{
        res.status(200).json({success:true,arrival})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({success: false, error: err.message});
    })
})

module.exports = router;