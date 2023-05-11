import * as types from "./actiontype"
import axios from "axios"

const Productsearch =(Cat)=>(dispatch)=> {
    dispatch({type:types.GET_Pro_REQUEST})
     return axios.get(`http://localhost:3005/product/all/${Cat}`)
     .then((r) => {
         dispatch({type:types.GET_Pro_SUCCESS, payload:r.data})
         console.log(r.data,"search")
         
     })
     .catch((e) =>{dispatch({type: types.GET_Pro_FAILURE})
           console.log(e) 
       })
   
     
   }



const Productdata =(Cat)=>(dispatch)=> {
 dispatch({type:types.GET_Products_REQUEST})
  return axios.get(`http://localhost:3005/product/${Cat}`)
  .then((r) => {
      dispatch({type:types.GET_Products_SUCCESS, payload:r.data})
      console.log(r)
      
  })
  .catch((e) =>{dispatch({type: types.GET_Products_FAILURE})
      console.log(e) 
    })

  
}


const sortasc =(Cat)=>(dispatch)=> {
    dispatch({type:types.GET_Products_REQUEST})
     return axios.get(`http://localhost:3005/product/sort/${Cat}`)
     .then((r) => {
         dispatch({type:types.GET_Products_SUCCESS, payload:r.data})
         console.log(r,"asc")
         
     })
     .catch((e) =>{dispatch({type: types.GET_Products_FAILURE})
         console.log(e) 
       })
   
     
   }

   const sortdesc =(Cat)=>(dispatch)=> {
    dispatch({type:types.GET_Products_REQUEST})
     return axios.get(`http://localhost:3005/product/sortdesc/${Cat}`)
     .then((r) => {
         dispatch({type:types.GET_Products_SUCCESS, payload:r.data})
         console.log(r,"asc")
         
     })
     .catch((e) =>{dispatch({type: types.GET_Products_FAILURE})
         console.log(e) 
       })
   
     
   }   

   const sorttitleza =(Cat)=>(dispatch)=> {
    dispatch({type:types.GET_Products_REQUEST})
     return axios.get(`http://localhost:3005/product/sorttitleza/${Cat}`)
     .then((r) => {
         dispatch({type:types.GET_Products_SUCCESS, payload:r.data})
         console.log(r,"asc")
         
     })
     .catch((e) =>{dispatch({type: types.GET_Products_FAILURE})
         console.log(e) 
       })
   
     
   }


   const sorttitleaz =(Cat)=>(dispatch)=> {
    dispatch({type:types.GET_Products_REQUEST})
     return axios.get(`http://localhost:3005/product/sorttitleaz/${Cat}`)
     .then((r) => {
         dispatch({type:types.GET_Products_SUCCESS, payload:r.data})
         console.log(r,"asc")
         
     })
     .catch((e) =>{dispatch({type: types.GET_Products_FAILURE})
         console.log(e) 
       })
   
     
   }

   const sortprice =(Cat,gt,lt)=>(dispatch)=> {
    dispatch({type:types.GET_Products_REQUEST})
     return axios.get(`http://localhost:3005/product/sortprice/${Cat}/${gt}/${lt}`)
     .then((r) => {
         dispatch({type:types.GET_Products_SUCCESS, payload:r.data})
         console.log(r,"asc")
         
     })
     .catch((e) =>{dispatch({type: types.GET_Products_FAILURE})
         console.log(e) 
       })
   
     
   }

   

const singledata=(id)=>(dispatch)=> {
    console.log(id)
    dispatch({type:types.GET_single_REQUEST})
     return axios.get(`http://localhost:3005/product/single/${id}`)
     .then((r) => {
         dispatch({type:types.GET_single_SUCCESS, payload:r.data[0]})
         console.log(r.data[0])
         
     })
     .catch((e) =>{dispatch({type: types.GET_single_FAILURE})
         console.log(e) 
       })
   
     
   }

export {Productdata,Productsearch,singledata,sortasc,sortdesc,sorttitleaz,sorttitleza,sortprice}