const mongoose=require("mongoose")

const AddcartSchema=mongoose.Schema({
    Title:String,
    Price:Number,
    Size:Array,
    Color:Array,
    Images:Array,
    Quantity:Number,
    CalId:String
})

const AddcartModel=mongoose.model("Addcart",AddcartSchema)

module.exports={AddcartModel}
