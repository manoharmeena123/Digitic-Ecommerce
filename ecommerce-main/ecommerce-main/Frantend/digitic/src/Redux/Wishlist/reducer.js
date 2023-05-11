import * as types from "./actiontype"

const initialstate={
    isError:false,
    data:[],
    IsLoading:false,
};

const reducer=(state=initialstate,action)=>{

    const {type,payload}=action

    switch(type){
    case types.Get_Wish_Request:
        return{
            ...state,
            IsLoading:true,
        };

    case types.Get_Wish_Success:
        return{
            ...state,
            IsLoading:false,
            data:payload
        };

    case types.Get_Wish_Failure:
        return{
            ...state,
            isError:true,
            data:[],
        };
     
        case types.Delete_Wish_Success:
            return{
                ...state,
                IsLoading:false,
                data:payload
            };
    
                           
        
    default:
    return state
        
}
}

export {reducer}