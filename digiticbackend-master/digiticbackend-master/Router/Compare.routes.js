const express=require("express")

const {CompareModle}=require("../Modules/Compare.module")

const CompareRouter=express.Router()

CompareRouter.get("/",async(req,res)=>{
    const userID=req.body.CalId
    try{
        
        let data=await CompareModle.find({CalId:userID})
        res.send(data)
    }
    catch(err){
        console.log(err)
        
        res.send(err)
    }
})

CompareRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    try{
        
        let data = new CompareModle(payload)
        await data.save()
      
        res.send("Add in Comparelist")
    }
    catch(err){
        console.log(err)
        
        res.send("something wrong")
    }
})

CompareRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
        
        await CompareModle.findByIdAndDelete({_id:id})
        
        let dat= await CompareModle.find()
        res.send(dat)
        
    }
    catch(err){
        console.log(err)
        
        res.send("something wrong in delete")
    }
})

module.exports={CompareRouter}