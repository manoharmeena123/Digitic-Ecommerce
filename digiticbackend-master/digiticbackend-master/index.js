const express = require("express")

const cors=require("cors")

require("dotenv").config()

const {connection} = require("./config/data")

const {CollectionRouter}=require("./Router/Collection.routes")
const { ProductRouter } = require("./Router/Product.routes")
const { UserRouter } = require("./Router/User.routes")
const { logger } = require("./Middleware/Logger")
const { WishRouter } = require("./Router/Wishlish.routes")
const { AddcartRouter } = require("./Router/Addtocart.routes")
const { BlogsRouter } = require("./Router/Blogs.routes")
const { CompareRouter } = require("./Router/Compare.routes")
const { authentication } = require("./Middleware/authentication")

const app=express();

app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("web")
})

app.use("/collection",CollectionRouter)
app.use("/product",ProductRouter)


app.use("/blogs",BlogsRouter)

// app.use(logger)





app.use("/user",UserRouter)

app.use(authentication)

app.use("/wish",WishRouter)
app.use("/addcart",AddcartRouter)
app.use("/compare",CompareRouter)



app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connection to db cloud")


    }
    catch(err){
        console.log(err)

    }
    console.log("working on 3005")
})
