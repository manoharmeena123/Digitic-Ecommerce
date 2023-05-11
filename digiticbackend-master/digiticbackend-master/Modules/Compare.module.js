const mongoose=require("mongoose")

const CompareSchema=mongoose.Schema({
    Title:String,
    Price:Number,
    Type :String,
    Brand : String,
    SKU : String,
    Availability :Number,
    Size:Array,
    Color:Array,
    Images:Array,  
    CalId:String  
})

const CompareModle=mongoose.model("Comparelist",CompareSchema)

module.exports={CompareModle}