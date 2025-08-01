const express= require('express')

const app = express()
app.use(express.json());
app.get("/home",(req,res)=>{
    res.send('welcome to Home Page')
})

app.get('/aboutus',(req,res)=>{
    res.json({message: "Welcome to About Us"})
})


app.get('/contactus',(req,res)=>{
    res.status(200).json({phoneno: "2534654400", name:"umar"})
})





app.use((req, res) => {
  res.status(404).send('404 Not Found');
});


app.listen(2000,()=>{
    console.log("port is success on 2000")
})