const mongoose=require("mongoose")


const UserSchema=mongoose.Schema({
    Avatar:String,
    Name:String,
    Email:String,
    Password:String,
    date:String,
    time:String
   

})

const UserModel=mongoose.model("Profile",UserSchema)

module.exports={UserModel}