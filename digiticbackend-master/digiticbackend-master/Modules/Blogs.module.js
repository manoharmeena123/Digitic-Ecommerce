const mongoose=require("mongoose")

const BlogsSchema=mongoose.Schema({
    Title:String,
    Date:String,
    Discription:String,
    Image:String,
    
})

const BlogsModel=mongoose.model("Blogs",BlogsSchema)

module.exports={BlogsModel}
