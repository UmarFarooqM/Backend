const express = require("express");
const connectToDB = require("./configs/mongodb.config");
const recipeRouter = require("./routes/recipe.routes");
const productRouter = require("./routes/product.routes");
const orderRouter = require("./routes/order.routes");

connectToDB()

const app = express();

app.use(express.json());

app.use("/recipes", recipeRouter)

app.use("/product", productRouter )

app.use("/order", orderRouter)
app.listen(5000, ()=>{
    console.log("Server Started for ecommerce....")
})