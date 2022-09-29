const mongoose = require("mongoose")

const URLSchema = new mongoose.Schema({ 
  urlCode: { type: String, unique: true, lowercase: true, trim: true }, 
  longUrl: String, 
  shortUrl: { type: String, unique: true } }
)

module.exports=mongoose.model("URL",URLSchema)