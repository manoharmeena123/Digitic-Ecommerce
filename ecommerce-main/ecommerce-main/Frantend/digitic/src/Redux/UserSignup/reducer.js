import * as types from "./actiontype"

const initialState={
    isauth:false,
    user:[],
    isLoading:false,
    IsError:false,
};

const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.GET_Signup_REQUEST:
            return{
                ...state,
                isLoading:true,
            };
        case types.GET_Signup_SUCCESS:
            return{
                ...state,
                isLoading:false,
            
                user:payload

            };
        case types.GET_Signup_FAILURE:
            return{
                ...state,
                IsError:true,

            };
            
            
            case types.GET_getSignup_REQUEST:
            return{
                ...state,
                isLoading:true,
            };
        case types.GET_getSignup_SUCCESS:
            return{
                ...state,
                isLoading:false,
                
                user:payload

            };
        case types.GET_getSignup_FAILURE:
            return{
                ...state,
                IsError:true,

            }
            case types.GET_Signin_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    isauth:true,
                    user:payload
    
                };    
        default:
            return state    

    }
}
export {reducer}