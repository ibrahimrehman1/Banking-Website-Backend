const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Transfers = require("../models/transfersModel");

dotenv.config();

const URI = process.env.URI

module.exports = async (req, res) =>{
    try{
        mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, })
        let data = await Transfers.create(req.body);
        console.log(data);
        res.status(200).json({status: "Database Updated!"})
    }catch(err){
        res.status(500).json({status: "Failed!"})
    }

}