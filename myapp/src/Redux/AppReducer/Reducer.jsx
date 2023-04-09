import * as types from "./actionTypes"

 const intailState = {
     PostData:[],
     isLoading:false,
     isError:false,
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
      

          default:
            return state;
        }

 
}
