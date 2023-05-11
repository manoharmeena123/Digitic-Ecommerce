import * as types from "./actiontype"

const initialstate={
    
    Product:[],
    singledata:{},
    Pro:[],
    isError:false,
    IsLoading:false,
};

const reducer=(state=initialstate,action)=>{
const {type,payload}=action
switch(type){
    case types.GET_Products_REQUEST:
        return{
            ...state,
            IsLoading:true,
        };

    case types.GET_Products_SUCCESS:
        return{
            ...state,
            IsLoading:false,
            Product:payload
        };

    case types.GET_Products_FAILURE:
        return{
            ...state,
            isError:true,
            Product:[],
        };            

        case types.GET_Pro_REQUEST:
        return{
            ...state,
            IsLoading:true,
        };

    case types.GET_Pro_SUCCESS:
        return{
            ...state,
            IsLoading:false,
            Pro:payload
        };

    case types.GET_Pro_FAILURE:
        return{
            ...state,
            isError:true,
            Pro:[],
        };
        case types.GET_single_REQUEST:
        return{
            ...state,
            IsLoading:true,
        };

    case types.GET_single_SUCCESS:
        return{
            ...state,
            IsLoading:false,
            singledata:payload
        };

    case types.GET_single_FAILURE:
        return{
            ...state,
            isError:true,
            singledata:[],
        };               
        default:
        return state
        
}
}

export {reducer}