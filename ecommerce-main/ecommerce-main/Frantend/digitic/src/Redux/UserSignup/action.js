import * as types from "./actiontype"
import axios from "axios"

const signup = (payload)=>(dispatch)=> {
    // const navigate=useNavigate()
    dispatch({type:types.GET_Signup_REQUEST})
      return axios.post('http://localhost:3005/user/signup', payload)
      .then((r) => {
          dispatch({type:types.GET_Signup_SUCCESS, payload:r.data})
          console.log(r)
          // navigate("/admin")
      })
      .catch((e) =>{dispatch({type: types.GET_Signup_FAILURE})
          console.log(e) })
  
      
    }


    const getsignup =(dispatch)=> {
        // const navigate=useNavigate()
        dispatch({type:types.GET_getSignup_REQUEST})
          return axios.get('http://localhost:8004/user')
          .then((r) => {
              dispatch({type:types.GET_getSignup_SUCCESS, payload:r.data})
              console.log(r)
              
          })
          .catch((e) =>{dispatch({type: types.GET_getSignup_FAILURE})
              console.log(e) })
      
          
        }


        const remove =(id)=>(dispatch)=>{
            dispatch({type:types.GET_delete_REQUEST})
             return axios.delete(`http://localhost:8004/user/delete/${id}`)
             .then((r) => {
                 dispatch({type:types.GET_delete_SUCCESS})
                 console.log(r)
                
             })
             .catch((e) =>{dispatch({type: types.GET_delete_FAILURE})
                 console.log(e) })
           
             
           }      

    const signin = (payload)=>(dispatch)=> {
        // const navigate=useNavigate()
        dispatch({type:types.GET_Signin_REQUEST})
          return axios.post('http://localhost:3005/user/login', payload)
          .then((r) => {
              dispatch({type:types.GET_Signin_SUCCESS, payload:r.data})
              localStorage.setItem("token_key",r.data.token)
              console.log("token",r.data)
              
          })
          .catch((e) =>{dispatch({type: types.GET_Signin_FAILURE})
              console.log(e) })
      
          
        }


export {signup,signin,getsignup,remove};