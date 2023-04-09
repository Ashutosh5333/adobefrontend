import * as types  from "./actionTypes"

const initialState = {
    isLoading:false,
    isERROR:false,
    token:"",
    userdata:[]
}


const reducer = (state=initialState,{type,payload})=>{


     switch(type){   
        case  types.GET_SIGNUP_REQUEST : 
            return {
                ...state,
                isLoading:true,
            }
        
        case  types.GET_SIGNUP_SUCCESS : {
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload
            }
        } 

        case  types.GET_SIGNUP_FAILURE : 
            return {
                ...state,
                isLoading:false,
                isError:true,
                token:""
            }
  
        case  types.GET_LOGIN_SUCCESS : 
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload
            }
            
        case  types.USER_DATA_SUCCESS : 
        return {
            ...state,
            isLoading:false,
            isError:false,
            userdata:payload
        }

        default:
            return state
     }
}

export {reducer} 