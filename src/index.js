const express = require("express")
const app = express()
const bodyParser=require("body-parser")
const mongoose = require("mongoose")
const route = require("./routes/route")

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://project4group67:cp5CAS9tJL9ha9KV@cluster0.uv5ma8n.mongodb.net/test", { useNewUrlParser: true }
).then(()=>console.log("MongoDB is connected")).catch((err) => console.log(err))

app.use("/", route)

app.listen(3000, () => console.log("Express app running on port" + 3000))