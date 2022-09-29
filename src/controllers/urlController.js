const shortId = require("shortid")
const validUrl = require("valid-url")
const URLSchema = require("../models/urlModel")

const shortenURL = async function (req, res) {
  try {
    const data = req.body
    if(Object.keys(data).length<1) return res.status(400).send({status:false,message:"Please provide longUrl"})
    if (!validUrl.isWebUri(data.longUrl)) return res.status(400).send({ status: false, message: "Invalid URL" })
    const isLongURLPresent = await URLSchema.findOne({ longUrl: data.longUrl }).select({ _id: 0, longUrl: 1, shortUrl: 1, urlCode: 1 })
    if (isLongURLPresent) return res.status(201).send({data: isLongURLPresent })
    const urlCode = shortId.generate(data.longUrl)
    const shortUrl = `http://localhost:3000/${urlCode}`
    data.urlCode = urlCode
    data.shortUrl = shortUrl

    const newURL = await URLSchema.create(data)
    const createdURL = await URLSchema.findOne(data).select({ _id: 0, longUrl: 1, shortUrl: 1, urlCode: 1 })

    res.status(201).send({ data: createdURL })

  } catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
}

module.exports = { shortenURL }