const mongoose = require('mongoose');

const Itemschema= mongoose.Schema({
    price:Number,
    quality:Number,
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    }
})

const OrderSchema= mongoose.Schema({
    created:{
        type:Date,
        default:Date.now()
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'customer'

    },
  
    Items:[Itemschema]
});

module.exports = mongoose.model('Order',OrderSchema ); 