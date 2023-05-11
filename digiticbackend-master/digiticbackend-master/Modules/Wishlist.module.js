const mongoose=require("mongoose")

const WishSchema=mongoose.Schema({
    Title:String,
    Price:Number,
    Images:Array,    
    CalId:String
})

const WishModle=mongoose.model("Wishlist",WishSchema)

module.exports={WishModle}