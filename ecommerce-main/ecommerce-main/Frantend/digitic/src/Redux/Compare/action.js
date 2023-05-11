import * as types from "./actiontype"
import axios from "axios"

const getcompare=(dispatch)=> {
 
    dispatch({type:types.Get_compare_Request})
      
    return axios.get('http://localhost:3005/compare/',{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
      .then((r) => {
          dispatch({type:types.Get_compare_Success, payload:r.data})
          console.log(r)
          
      })
      .catch((e) =>{dispatch({type: types.Post_compare_Failure})
          console.log(e) 
        })
    
      
    }
    





const postcompare=(data)=>(dispatch)=>{
    dispatch({type:types.Post_compare_Request})
    return axios.post(`http://localhost:3005/compare/newpost/`,data,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
    .then((res)=>{ dispatch({type:types.Post_compare_Success})
    console.log(res)
})
    .catch((err)=>{dispatch({type:types.Post_compare_Failure})
        console.log(err)
    })
}


const deletecompare=(id)=>(dispatch)=>{
    dispatch({type:types.Delete_compare_Request})
    return axios.delete(`http://localhost:3005/compare/delete/${id}`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token_key")}`
        }
    })
    .then((res)=>{dispatch({type:types.Delete_compare_Success,payload:res.data})
    console.log(res.data,res)
    })
    .catch((err)=>{dispatch({type:types.Delete_compare_Failure})
        console.log(err)
    })

}


export { getcompare,postcompare,deletecompare }