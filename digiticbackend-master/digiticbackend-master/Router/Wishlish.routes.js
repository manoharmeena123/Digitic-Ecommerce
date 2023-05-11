const express=require("express")

const {WishModle}=require("../Modules/Wishlist.module")

const WishRouter=express.Router()

WishRouter.get("/",async(req,res)=>{
    const userID=req.body.CalId
    try{
        
        let data=await WishModle.find({CalId:userID})
        res.send(data)
    }
    catch(err){
        console.log(err)
        
        res.send(err)
    }
})

WishRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        
        let data = new WishModle(payload)
        await data.save()
      
        res.send("Add in Wishlist")
    }
    catch(err){
        console.log(err)
        
        res.send("something wrong")
    }
})

WishRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        
        await WishModle.findByIdAndDelete({_id:id})
        
        let dat= await WishModle.find()
        res.send(dat)
        
    }
    catch(err){
        console.log(err)
        
        res.send("something wrong in delete")
    }
})

module.exports={WishRouter}