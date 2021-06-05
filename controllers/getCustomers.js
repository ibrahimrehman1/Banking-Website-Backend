const mongoose = require("mongoose");
const Customers = require("../models/customersModel");
const dotenv = require("dotenv")

dotenv.config()

const URI = process.env.DB_URI;

module.exports = async (req, res) => {
    try{
        mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, })
        let data = await Customers.find();
        res.status(200).json({customers: data});
    }catch(e){
        res.status(401).json({status: "Failed!"})
    }
}