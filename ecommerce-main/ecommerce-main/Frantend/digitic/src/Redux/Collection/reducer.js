import * as types from "./actiontype"

const initialstate={
    data:[],
    isError:false,
    IsLoading:false,
};

const reducer=(state=initialstate,action)=>{

    const {type,payload}=action

    switch(type){
    case types.GET_Collection_REQUEST:
        return{
            ...state,
            IsLoading:true,
        };

    case types.GET_Collection_SUCCESS:
        return{
            ...state,
            IsLoading:false,
            data:payload
        };

    case types.GET_Collection_FAILURE:
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