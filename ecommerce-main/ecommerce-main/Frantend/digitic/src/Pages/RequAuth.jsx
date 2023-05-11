import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const RequAuth = ({children}) => {
    
    const auth=useSelector((store)=>store.User.isauth)
    const location=useLocation()
    console.log("re",location)
    // console.log(auth)
    if(!auth){
        
       return <Navigate to="/login" state={{from:location.pathname }} replace/>
    }
  
    return children
}

export default RequAuth