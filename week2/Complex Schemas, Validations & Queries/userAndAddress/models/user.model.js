const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({  /// subdocument
    orderName:{type:String, required:true},
    orderAmount:{type:Number, required:true},
    deliveryStatus:{type:Boolean, default:false},
    modeOfPayment:{type:String, enum:["COD", "UPI", "NetBanking", "DebitCard", "CreditCard", "GiftCard"]}
})

const addressSchema = new mongoose.Schema({
    houseNo:{type:String,required:true},
    area:{type:String, required:true},
    landmark:String,
    teshil:{type:String, required:true},
    district:{type:String, required:true},
    state:{type:String, required:true},
    pincode:{type:Number, required:true},
    mobileNumber:{type:Number,required:true}
   })

const userSchema = new mongoose.Schema({
    name:{type: String, required:true}, 
    email:{type:String, required:true, unique:true}, 
    password:{type:String, default:"pass123"},  
    age:{type:Number, min:20, max:100},
    gender:{type:String, enum:["male", "female"]} , 
    orders:[ orderSchema],
    address:[ addressSchema], 

})

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;