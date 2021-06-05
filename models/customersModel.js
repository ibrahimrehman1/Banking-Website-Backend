const mongoose = require("mongoose");

let CustomersSchema = new mongoose.Schema({
    name: String,
    email: String,
    currentBalance: Number,
    accountType: String,
    city: String,
    mobileNo: Number,
    lastTransaction: String

})

module.exports = mongoose.model("Customers", CustomersSchema, "Customers");