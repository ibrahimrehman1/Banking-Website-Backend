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


if (process.env.NODE_ENV === "production"){

    app.use(express.static("banking-website/build"))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "banking-website", "build", "index.html"))
    })
}

app.listen(PORT, ()=>console.log(`Server running on PORT ${PORT}`))