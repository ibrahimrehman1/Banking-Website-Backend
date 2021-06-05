const mongoose = require("mongoose");


const TransfersSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    amount: Number,
    date: String
})

module.exports = mongoose.model("Transfers", TransfersSchema, "Transfers")