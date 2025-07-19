const mongoose = require("mongoose");
let connected = false;
 const connectDB = async ()=>{
    mongoose.set('strictQuery',true);
    if(connected){
        console.log("Mongo db is connected")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        connected = true
    } catch(error){
        console.log("error",error)
    }
 }

module.exports = connectDB