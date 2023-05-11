const jwt = require("jsonwebtoken")


const authentication=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1]
    console.log(token,"tooo")

    if(token){
        const decoded=jwt.verify(token,"secretkey")
        console.log(decoded)
        if(decoded){
            const userID=decoded.userID
            req.body.CalId=userID
            console.log("middleware",userID,req.body.CalId)
            next()
        }
        else{
            res.send("please signin")
        }
    }
    else{
        res.send("please sigin")
    }
}

module.exports={authentication}