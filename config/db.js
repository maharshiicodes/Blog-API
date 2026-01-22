const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect('mongodb+srv://maharshilavana_db_user:harikrushna1234@cluster0.8sxrxts.mongodb.net/?appName=Cluster0');
        console.log(`MongoDB Connected : ${conn.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;