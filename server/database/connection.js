const mongoose = require('mongoose')

const connectDB = async() =>{
    try{
        // mongodb connection string
        const con = await mongoose.connect("mongodb://127.0.0.1:27017/PXE",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`MongoDB connected : ${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(t);
    }
}

module.exports = connectDB;