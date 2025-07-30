const express = require('express')

const app = express()
const fileinfo= require('fileinfo')

const urlparse = require('urlparser')

app.get('/test',(req,res)=>{
    res.send('Test route is working!')
})

let url='/fileinfo?filepath=folder/sample.txt'
app.get(url,(req,res)=>{
    const f= fileinfo(url)
    res.send(f)

})
let par= '/parseurl?url=https://masaischool.com/course?name=backend&duration=6weeks'
app.get(par, (req,res)=>{
    let parse = urlparse(par)
    res.send(parse)
})







app.listen(8000, ()=>{
    console.log('successfully port 8000')
})