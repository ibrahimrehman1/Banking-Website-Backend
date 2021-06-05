const mongoose = require("mongoose")
const Customers = require("../models/customersModel");
const dotenv = require("dotenv").config();

const URI = process.env.DB_URI;


module.exports = async (req, res) =>{
    try{
        mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, });
        let data1 = await Customers.updateOne({name: req.body.sender}, {currentBalance: req.body.senderCurrentBalance - req.body.amount, lastTransaction: req.body.date});
        let data2 = await Customers.updateOne({name: req.body.receiver}, {currentBalance: req.body.receiverCurrentBalance + req.body.amount});
        res.status(200).json({"status": "Updated DB!"})
    }catch(err){
        res.status(500).json({err: err.message});
    }
}

