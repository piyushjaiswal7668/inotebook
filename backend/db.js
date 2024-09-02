const mongoose= require('mongoose')
require('dotenv').config();

const connectToMongo=()=>{

    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));
}

module.exports= connectToMongo;