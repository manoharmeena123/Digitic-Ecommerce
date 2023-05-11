const express =require("express")
const app =express()
const fs=require("fs")


const logger=(req,res,next)=>{
    const hour=new Date().getHours()
    const min=new Date().getMinutes()
    const time=hour+":"+min

    const date= new Date().getDate() 
    const month=new Date().getMonth()
    const year =new Date().getFullYear()
    const fulldate=date+"/"+month+"/"+year
    req.body.time=time
    req.body.date=fulldate
    const startTime=new Date().getTime()
    next()
    const endTime=new Date().getTime()
    const Timetaken=endTime-startTime
    
   
    console.log(date,month,year,startTime,time,fulldate)
    
}

module.exports={logger}



