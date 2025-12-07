const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.atlas_URL)
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((err)=>{
        console.log("MongoDB Connection Error:",err);
    })
}

module.exports = connectDB;