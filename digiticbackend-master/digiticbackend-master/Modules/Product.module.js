const mongoose=require("mongoose")

const ProductSchema=mongoose.Schema({
    Title:String,
    Price:Number,
    Rating:Number,
    Type :String,
    Brand : String,
    Categories :Array,
    Tags :Array,
    SKU : String,
    Availability :Number,
    Size:Array,
    Color:Array,
    Images:Array,
    Discription:String,
    Cat:String,    

})

const ProductModel=mongoose.model("Product",ProductSchema)

module.exports={ProductModel}
