const express =require("express")

const {ProductModel}=require("../Modules/Product.module")

const ProductRouter =express.Router()

ProductRouter.get("/all/:Cat",async(req,res)=>{
    const cat=req.params.Cat
    try{
        const data=await ProductModel.find({Cat : {$regex: cat }})
        
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})

ProductRouter.get("/allProducts",async(req,res)=>{
    
    try{
        const data=await ProductModel.find()
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})



ProductRouter.get("/:Cat",async(req,res)=>{
    const cat=req.params.Cat
    // const size=req.params.Size

    try{
        const data=await ProductModel.find({Cat:cat})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})

ProductRouter.get("/sort/:Cat",async(req,res)=>{
    const cat=req.params.Cat
    console.log(cat)
    try{
        const data=await ProductModel.find({Cat:cat}).sort({Price:1})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})

ProductRouter.get("/sortdesc/:Cat",async(req,res)=>{
    const cat=req.params.Cat
    console.log(cat)
    try{
        const data=await ProductModel.find({Cat:cat}).sort({Price:-1})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})

// --------------------------------------sort by A-z----------------------
ProductRouter.get("/sorttitleaz/:Cat",async(req,res)=>{
    const cat=req.params.Cat
    console.log(cat)
    try{
        const data=await ProductModel.find({Cat:cat}).sort({Title:1})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})

ProductRouter.get("/sorttitleza/:Cat",async(req,res)=>{
    const cat=req.params.Cat
    console.log(cat)
    try{
        const data=await ProductModel.find({Cat:cat}).sort({Title:-1})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})
// ---------------------------------------------------------------------------------

// --------------------------------sort in range----------------------------------
ProductRouter.get("/sortprice/:Cat/:gt/:lt",async(req,res)=>{
    const cat=req.params.Cat
    const gt=req.params.gt
    const lt=req.params.lt
    console.log(gt,lt,"jj")
    console.log(cat)
    try{
        const data=await ProductModel.find({Cat:cat , Price: { $gte:gt,$lte:lt }})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})



// -----------------------------for single page------------------------
ProductRouter.get("/single/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const data=await ProductModel.find({Title:id})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})

ProductRouter.get("/Color/:Cat",async(req,res)=>{
    const cat=req.params.Cat
    console.log(cat)
    try{
        const data=await ProductModel.find().sort({Title:-1})
        res.send(data)

    }
    catch(err){
        console.log(err)
        res.send("something wrong")

    }
})

ProductRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        await ProductModel.insertMany(payload)
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

module.exports={ProductRouter}