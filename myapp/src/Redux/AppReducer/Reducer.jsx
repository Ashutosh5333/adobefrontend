import * as types from "./actionTypes"

 const intailState = {
     PostData:[],
     isLoading:false,
     isError:false,
     Mypost:[]
 }


export const reducer = ( state=intailState,action ) => {
    const {type, payload} = action;

      switch(type){
        case types.GET_DATA_REQUEST:
            return {
              ...state,
              isLoading: true,
            };
          case types.GET_DATA_SUCCESS:
            return {
              ...state,
              isLoading: false,
              isError: false,
              PostData: payload,
            };
      
          case types.GET_DATA_FAILURE:
            return {
              ...state,
              isLoading: false,
              isError: true,
              PostData: [],
            };
            case  types.MYPOST_DATA_REQUEST : 
            return {
                ...state,
                isLoading:true,
            }
        
        case  types.MYPOST_DATA_SUCCESS: 
            return {
                ...state,
                isLoading:false,
                isError:false,
                Mypost:payload
            }
        case  types.MYPOST_DATA_FAILURE : 
            return {
                ...state,
                isLoading:false,
                isError:true,
                Mypost:[]
            }

          default:
            return state;
        }

 
}
