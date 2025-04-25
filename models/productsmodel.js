const mongoose = require('mongoose');
const ProdSchema=mongoose.Schema(
    {
        Name:
            {type:String,
            required:true
        },
        Quantity_Sold:{
            type:Number,
            required:true
        },
        
        Price:{
            type:Number,
            required:true,
            default:0
        },
        Stock_available:{
            type:Number,
            required:true,
            default:0
        }

    },
    {
        Timestamp:true
    }
)
const Product=mongoose.model('Product',ProdSchema)
module.exports=Product;