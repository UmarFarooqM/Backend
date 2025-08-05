const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    order_id: Number,
    customer_name: String,
    items : String,
    total_amount: Number,
    order_status: String
})

const orderModel = mongoose.model("order", orderSchema)

module.exports = orderModel;

