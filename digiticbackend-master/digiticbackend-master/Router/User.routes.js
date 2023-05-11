const express =require("express")
const Jwt= require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {UserModel}=require("../Modules/User.module")

const UserRouter =express.Router()


UserRouter.get("/",async (req,res)=>{
    
    console.log(req.body)
    try{
        const user=await UserModel.find()
        console.log(user)
        res.send(user)

    }
    catch(err)
    {
        console.log(err)
        res.send("something wrong")
    
    }

    })
    

UserRouter.post("/signup",async (req,res)=>{
    const {Email,Password,Name,Avatar,date,time}=req.body
    console.log(req.body)
    const userPresent=await UserModel.findOne({Email})
    
    if(userPresent?.Email){
        res.send("try loggin in")
    }
    else{
        try{
            bcrypt.hash(Password, 5,async function(err, decodepassword) {
                
                const user=new UserModel({Email,Password:decodepassword,Name,Avatar,date,time})
                await user.save()
                res.send("sign up successfully")
            });
            
        }
        catch(err){
            console.log(err)
            res.send("something wrong")
    
        }

    }
    
})

UserRouter.delete("/delete/:id",async(req,res)=>{
    // let payload=req.body
    let id=req.params.id
    try{
        await UserModel.findByIdAndDelete({_id:id})
        res.send({"meg":"delete one data successfullly"})
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})


UserRouter.post("/login",async (req,res)=>{

    const{Email,Password}=req.body
    try{
        const user=await UserModel.find({Email})
        if(user.length>0){
            const hashed_password=user[0].Password
            bcrypt.compare(Password, hashed_password, function(err, result) {
             if(result){
                const token = Jwt.sign({"userID":user[0]._id}, 'secretkey');
                res.send({mesg:"Login successfull",token:token,Email:Email})
                console.log(token)
                console.log(user)

             }
             else{
                res.send("Invalid Credentials")
            } 
            });
            
            
        }
        else{
            res.send("Invalid Credentials")
        }
        
    }
    catch(err){
        console.log(err)

    }
})


module.exports={UserRouter}