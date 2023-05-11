import * as types from "./actiontype"

const initialstate={
    isError:false,
    data:[],
    IsLoading:false,
};

const reducer=(state=initialstate,action)=>{

    const {type,payload}=action

    switch(type){
    case types.Get_Add_Request:
        return{
            ...state,
            IsLoading:true,
        };

    case types.Get_Add_Success:
        return{
            ...state,
            IsLoading:false,
            data:payload
        };

    case types.Get_Add_Failure:
        return{
            ...state,
            isError:true,
            data:[],
        };     
        
        case types.Post_Add_Success:
            return{
                ...state,
                IsLoading:false,
                data:payload
            };
        case types.Delete_Add_Success:
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