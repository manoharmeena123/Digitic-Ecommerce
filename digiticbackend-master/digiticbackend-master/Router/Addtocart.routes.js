const express =require("express")

const AddcartRouter=express.Router()


const {AddcartModel} =require("../Modules/Addtocart.module")

AddcartRouter.get("/",async(req,res)=>{
    const userID=req.body.CalId
    try{
        
        let data =await AddcartModel.find({CalId:userID})
        res.send(data) 

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
})

AddcartRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    try{
        let data= new AddcartModel(payload)
        await data.save()
        let dat= await AddcartModel.find()
        res.send(dat)

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
})

AddcartRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
         await AddcartModel.findByIdAndDelete({_id:id})
       
         let dat= await AddcartModel.find()
        res.send(dat) 

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
})

module.exports={AddcartRouter}