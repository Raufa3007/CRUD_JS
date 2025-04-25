const express= require('express');
const mongoose = require('mongoose');
const Product=require("./models/productsmodel")
const router=require("./Routes/products_rotes")
const dotenv=require("dotenv")
const app=express();
dotenv.config();

//Middleware
app.use(express.json())

//Routing
app.use('/api/products',router)

//Listen To Server
app.listen(3000)

//MongoDb connection
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Connected!'))
    .catch((error)=> console.log('Not Connected',error));
