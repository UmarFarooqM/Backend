const express = require('express')
const readfile = require('./read')
const os = require('os')
const dns = require('dns')
const app = express()
const data = readfile()
app.get("/test",(req,res)=>{

    res.send("Test route is working!")
})

app.get("/readfile", (req,res)=>{
    res.send(data)
})

app.get("/systemdetails",(req,res)=>{
    // res.send(  os.platform())
    let platform = os.platform()
    let totalmem = `${(os.totalmem() / 1024 ).toFixed(1)} GB`
    let freemem = ` ${(os.freemem()  / 1024).toFixed(1)} GB`
    let cpu = os.cpus()[0].model
    
    res.json({platform,totalmem,freemem,cpu})
})

app.get("/getip",(req,res)=>{
    const hostname = 'masaischool.com'
    dns.lookup('masaischool.com', (err, address,family)=>{
        const ipAddress = family
        res.json({address,ipAddress,hostname})
    })

})

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})