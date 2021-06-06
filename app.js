const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const getCustomers = require("./controllers/getCustomers");
const postTransfers = require("./controllers/postTransfer");
const putCustomers = require("./controllers/putCustomers");
const path = require("path");

dotenv.config()

// Express App
let app = express();
let PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get("/customers", getCustomers);
app.post("/transfers", postTransfers);
app.put("/updatecustomers", putCustomers)



app.get("/", (req, res)=>{
    res.send("Hello Visitors!")
})


app.listen(PORT, ()=>console.log(`Server running on PORT ${PORT}`))