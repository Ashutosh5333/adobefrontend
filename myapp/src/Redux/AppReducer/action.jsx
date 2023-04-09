import * as types from "./actionTypes"
import axios from "axios"


// -------- ADD DATA---------- 

const AdddataReq = () =>{
   return {
      type: types.ADD_DATA_REQUEST,
   }
} 
const AdddataSucess = (payload) => {
   return {
      type :types.ADD_DATA_SUCCESS,
      payload,
   }
}
const AdddataFail = () => {
  return { 
      type :types.ADD_DATA_FAILURE
  }
}



 const token = JSON.parse(localStorage.getItem("token"))

const  ADDProducts =(newdata) => (dispatch) => {
  dispatch(AdddataReq)
  return axios.post(`https://drab-ruby-swallow-toga.cyclic.app/create`,newdata ,{
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((res) => {
    return   dispatch(AdddataSucess(res.data));
   }).catch((e)=> {
   return    dispatch(AdddataFail())
   })
}


   






  export {getData ,ADDProducts }
