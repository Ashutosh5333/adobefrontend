import * as types from "./actionTypes"
import axios from "axios"


// --------  ADD Post DATA ---------- 

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


//  ---------- get All post ------------ //

const getpostdataReq = () =>{
   return {
      type: types.GET_DATA_REQUEST
   }
} 
const getpostdataSucess = (payload) => {
   return {
      type :types.GET_DATA_SUCCESS,
      payload,
   }
}
const getpostdataFail = () => {
  return {
      type :types.GET_DATA_FAILURE
  }
}

//  ---------- get All post Single ------------ //

const getsingledataReq = () =>{
   return {
      type: types.GETSINGLE_DATA_REQUEST
   }
} 
const getsingledataSucess = (payload) => {
   return {
      type :types.GETSINGLE_DATA_SUCCESS,
      payload,
   }
}
const getsingledataFail = () => {
  return {
      type :types.GETSINGLE_DATA_FAILURE
  }
}


         //  --------- My Post --------  //

         const MypostReq = () =>{
            return {
               type: types.MYPOST_DATA_REQUEST,
            }
         } 
         const MyPostSucess = (payload) => {
            return {
               type :types.MYPOST_DATA_SUCCESS,
               payload,
            }
         }
         const MyPostFail = () => {
           return { 
               type :types.MYPOST_DATA_FAILURE
           }
         }


const token = JSON.parse(localStorage.getItem("token"))


  // --------------- Get All post list ----------------- //

  export const getAllPostData = (dispatch) => {
   dispatch(getpostdataReq())
return axios.get(`https://tough-knickers-colt.cyclic.app/Allpost`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
})
 .then((res)=>{
 return    dispatch(getpostdataSucess(res.data))
 }).catch((e)=>{
  return    dispatch(getpostdataFail())
 })
}


// -----------  get Single post  ------------  //
 
export const getSinglePostData =(_id) => (dispatch) => {
   dispatch(getsingledataReq())
return axios.get(`https://tough-knickers-colt.cyclic.app/Allpost/${_id}`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
})
 .then((res)=>{
 return    dispatch(getsingledataSucess(res.data))
 }).catch((e)=>{
  return    dispatch(getsingledataFail())
 })
}


  //  --------------- Get MyPost ---------------- //

  export const GetMyPost = (dispatch) => {
   dispatch(MypostReq())
return axios.get(`https://tough-knickers-colt.cyclic.app/post`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
})
 .then((res)=>{
 return    dispatch(MyPostSucess(res.data))
 }).catch((e)=>{
  return    dispatch(MyPostFail())
 })
}




   // ----------------- Add post ------------  //

export const  ADDProducts =(newdata) => (dispatch) => {
  dispatch(AdddataReq)
  return axios.post(`https://tough-knickers-colt.cyclic.app/post/create`,newdata ,{
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


   




  
