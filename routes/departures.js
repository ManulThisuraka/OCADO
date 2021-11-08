const router = require("express").Router();
let departures = require("../models/departures");

router.post('/departures/add',(req,res)=>{

    const newDeparture = new departures(req.body);

    newDeparture.save().then(()=>{
        res.json({success:"Departure added"});
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/departures/",(req,res)=>{

    departures.find().then((departureList)=>{
        res.json({
            success:true,
            existingDepartures:departureList
        });
    }).catch((err)=>{
        res.json({error:err.message});
    })
})

router.put("/departures/update/:id",(req,res)=>{
    
    departures.findByIdAndUpdate(req.params.id,
        {
            $set:req.body
        })
    .then(()=>{
        res.status(200).json({success: "Departure updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error with updating data", error: err.message});
    })
})

router.delete("/departures/delete/:id",(req,res)=>{
    departures.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).json({status: "Departure deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({status: "Error with delete departure", error: err.message});
    })
})

router.get("/departures/get/:id",(req,res)=>{
    let userId = req.params.id;
    departures.findById(userId)
    .then((departure)=>{
        res.status(200).json({success:true,departure})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({success: false, error: err.message});
    })
})

module.exports = router;