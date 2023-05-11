const mongoose=require("mongoose")

const CollectionSchema=mongoose.Schema({
    Title:String,
    Item:Number,
    Image:String,
})

const CollectionModel=mongoose.model("Collection",CollectionSchema)

module.exports={CollectionModel}
