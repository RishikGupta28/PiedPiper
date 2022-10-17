const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name:{
        type:String,  
    },
    address:{
        type:String,   
    },
    amount:{
        type:Number,    
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }
});


const food = mongoose.model('Food',formSchema);
module.exports = food;
