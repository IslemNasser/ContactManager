const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require:'Name product missing'
    },
    price:{
        type:Number,
        min:0,
        default:0
    },
    quantity:{
        type:Number,
        min:0
    },
    description:String
});
module.exports = mongoose.model('Product',ProductSchema); 
