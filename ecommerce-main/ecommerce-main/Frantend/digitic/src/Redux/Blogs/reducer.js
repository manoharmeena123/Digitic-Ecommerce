import * as types from "./actiontype"

const initialstate={
    isError:false,
    data:[],
    IsLoading:false,
};

const reducer=(state=initialstate,action)=>{

    const {type,payload}=action

    switch(type){
    case types.Get_Blog_Request:
        return{
            ...state,
            IsLoading:true,
        };

    case types.Get_Blog_Success:
        return{
            ...state,
            IsLoading:false,
            data:payload
        };

    case types.Get_Blog_Failure:
        return{
            ...state,
            isError:true,
            data:[],
        };            
        
    default:
    return state
        
}
}

export {reducer}