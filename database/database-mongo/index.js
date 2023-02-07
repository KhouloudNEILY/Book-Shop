const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const mongoUri = "mongodb://127.0.0.1/ecommerce";

mongoose.connect(mongoUri).then (()=>{
  console.log('MangoDb connected');
})
.catch((err)=>{
  console.log("err");
})
const itemSchema = new mongoose.Schema({
  description: String,
  quantity: Number,
});

const Item = mongoose.model("Item", itemSchema);

