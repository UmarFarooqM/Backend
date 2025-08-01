const express = require("express")

const app = express()

app.use(express.json())
const fs = require("fs")
app.get("/test",(req,res)=>{
    res.send("testing all the routes")
})


app.get("/all-dishes",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    const dishes = data.dishes
    res.send({msg: "get all the dishes", dishes })
    console.log(dishes)
})


//post 
app.post("/add-dish", (req,res)=>{
    let new_dish = req.body
    // console.log(dish)

    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    // console.log(dishes)
    const alldishes = data.dishes
    const id = alldishes[alldishes.length-1].id + 1;
    // console.log(id)
    new_dish = {...new_dish, id}
    alldishes.push(new_dish)
   fs.writeFileSync( "./db.json",JSON.stringify(data))
    res.status(200).json({msg:"all dishes", alldishes})
})

// path params
// get course by id
app.get("/dishes/:id", (req,res)=>{
    const reqid = req.params.id
    const alldishes = JSON.parse(fs.readFileSync("./db.json", "utf-8")).dishes
    const dish = alldishes.find((dish)=> dish.id == reqid)
    
    if(dish){
        res.send({"dish details": dish})
    }
    else{
        res.send("id is inapproriate")
    }   
})

//update a dish



app.put("/dishes/:id",(req,res)=>{

    let id = req.params.id
    let updateDish = req.body

    let Data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    let Dishes = Data.dishes

    let index = Dishes.findIndex((el)=> el.id == id)
    if(index==-1){
        res.status(404).send({msg:"give me correct id"})
    }
    else{
        let updatedDishes = Dishes.map((el, i) => {
      if (el.id == id) {
        return { ...el, ...updateDish };
      } else {
        return el;
      }
    });
        Data.dishes = updatedDishes
        fs.writeFileSync("./db.json", JSON.stringify(Data));
        res.status(201).json({ msg: "dish Updated" });

    }
})

    app.delete("/dishes/:id", (req,res)=>{
        let id = Number(req.params.id)
        let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
        let dishes = data.dishes
        let index = dishes.findIndex((dish)=> dish.id==id)
        if(index==-1){
            res.status(404).send({msg:"invalid id"})
        }
        else{
            let updatedDishes = dishes.filter((dish)=> dish.id !==id)
            data.dishes = updatedDishes;
            fs.writeFileSync("./db.json", JSON.stringify(data));
            res.status(200).json({msg:"Dish deleted", "dishes": data.dishes});

        }
    })

//query params to get all dishes by name search for dishes by name

app.get("/dish",(req,res)=>{

    let name = req.query.name

    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    let dishes = data.dishes
    const matchedDishes = dishes.filter(dish =>
        dish.name.toLowerCase().includes(name.toLowerCase())
    );
    if(matchedDishes.length>0){
        res.status(200).json({matchedDishes:matchedDishes})
    }
    else{
         res.status(404).send({ "message": "No dishes found" })
     

    }
    
    
})

app.use( (req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});




app.listen(3000, ()=>{
    console.log("crud operations ")
})