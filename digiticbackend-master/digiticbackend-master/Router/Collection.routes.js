const express =require("express")

const {CollectionModel}=require("../Modules/Collection.module")

const CollectionRouter =express.Router()

CollectionRouter.get("/",async(req,res)=>{
    
    try{
        const data=await CollectionModel.find()
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})



CollectionRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        await CollectionModel.insertMany(payload)
        // const new_note=new CalModel(payload)
        // await new_note.save()
        console.log(payload)
        res.send({"mesg":"detail save successfully"})
    }

    catch(err)
    {
        console.log(err)
        res.send({"err":"something wrong"})
    }
})

module.exports={CollectionRouter}