const express=require("express")
const router= express.Router()

const URLController=require("../controllers/urlController")

router.get("/test",(req,res)=>res.send("Working"))

router.post("/url/shorten",URLController.shortenURL)

module.exports=router 