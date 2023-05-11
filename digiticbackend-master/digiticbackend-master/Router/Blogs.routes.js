const express =require("express")

const BlogsRouter=express.Router()


const {BlogsModel} =require("../Modules/Blogs.module")

BlogsRouter.get("/",async(req,res)=>{
    try{
        
        let data =await BlogsModel.find()
        res.send(data) 

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
})

BlogsRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    try{
        let data= await BlogsModel.insertMany(payload)
        
        res.send(data) 

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
})


// BlogsRouter.post("/newpost",async(req,res)=>{
//     const payload=req.body
//     try{
//         let data= await BlogsModel.insertMany(payload)
        
//         res.send(data) 

//     }
//     catch(err){
//         console.log(err)
//         res.send(err)

//     }
// })


module.exports={BlogsRouter}