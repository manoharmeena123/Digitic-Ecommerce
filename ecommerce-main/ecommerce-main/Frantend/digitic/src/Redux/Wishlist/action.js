import * as types from "./actiontype"
import axios from "axios"

const getwish=(dispatch)=> {
 
    dispatch({type:types.Get_Wish_Request})
      
    return axios.get('http://localhost:3005/wish/',{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
      .then((r) => {
          dispatch({type:types.Get_Wish_Success, payload:r.data})
          console.log(r)
          
      })
      .catch((e) =>{dispatch({type: types.Post_Wish_Failure})
          console.log(e) 
        })
    
      
    }
    





const postwish=(data)=>(dispatch)=>{
    dispatch({type:types.Post_Wish_Request})
    return axios.post(`http://localhost:3005/wish/newpost/`,data,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
    .then((res)=>{ dispatch({type:types.Post_Wish_Success})
    console.log(res)
})
    .catch((err)=>{dispatch({type:types.Post_Wish_Failure})
        console.log(err)
    })
}


const deletewish=(id)=>(dispatch)=>{
    dispatch({type:types.Delete_Wish_Request})
    return axios.delete(`http://localhost:3005/wish/delete/${id}`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    }
    )
    .then((res)=>{dispatch({type:types.Delete_Wish_Success,payload:res.data})
    console.log(res.data,res)
    })
    .catch((err)=>{dispatch({type:types.Delete_Wish_Failure})
        console.log(err)
    })

}


export { getwish,postwish,deletewish }