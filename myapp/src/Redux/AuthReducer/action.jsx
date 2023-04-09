import * as types from "./actionTypes"
import axios from "axios"


const getsignReq = () =>{
   return {
      type: types.GET_SIGNUP_REQUEST
   }
}

const getsignSucess = (payload) => {
   return {
      type :types.GET_SIGNUP_SUCCESS,
      payload,
   }
}

const getsignFail = () => {
  return {
      type :types.GET_SIGNUP_FAILURE
  }
}

const getLoginReq = () =>{
   return {
      type: types.GET_LOGIN_REQUEST
   }
} 
const getloginSucess = (payload) => {
   return {
      type :types.GET_LOGIN_SUCCESS,
      payload,
   }
}

const getLoginFail = () => {
  return {
      type :types.GET_LOGIN_FAILURE
  }
}


// ------------ Get User Data  -------------- //

const getuserReq = () =>{
   return {
      type: types.USER_DATA_REQUEST
   }
}

const getuserSucess = (payload) => {
   return {
      type :types.USER_DATA_SUCCESS,
      payload,
   }
}

const getuserFail = () => {
  return {
      type :types.USER_DATA_FAILURE
  }
}



const DeleteDatareq = () =>{
   return {
      type: types.DELETE_DATA_REQUEST
   }
} 
const Deletedatasucess = () => {
   return {
      type :types.DELETE_DATA_SUCCESS,
   }
}
const Deletedatafai = () => {
  return {
      type :types.DELETE_DATA_FAILURE
  }
  }
  
  // -------------------- Updated ----------------- //

  const updatedpostReq = () =>{
   return {
      type: types.EDIT_DATA_REQUEST,
   }
} 
const updateducess = (payload) => {
   return {
      type :types.EDIT_DATA_SUCCESS,
      payload,
   }
}
const updatedFail = () => {
  return { 
      type :types.EDIT_DATA_FAILURE
  }
}

// ----------------- Single user ------------ //
const SingleuserReq = () =>{
   return {
      type: types.GETSINGLE_USER_REQUEST,
   }
} 
const Singleuserucess = (payload) => {
   return {
      type :types.GETSINGLE_USER_SUCCESS,
      payload,
   }
}
const singleuserFail = () => {
  return { 
      type :types.GETSINGLE_USER_FAILURE
  }
}




// --------------  

export const   Singleuser   = (_id) => (dispatch) => {
   dispatch(SingleuserReq())
   return axios.get(`https://tough-knickers-colt.cyclic.app/users/${_id}`)
    .then((res) => {
     return   dispatch(Singleuserucess(res.data));
    }).catch((e)=> {
    return    dispatch(singleuserFail())
    })
 }

 




// --------  user delete ----------- //

export const  DeletePost  =(_id) => (dispatch) => {
   dispatch(DeleteDatareq())
   return axios.delete(`https://tough-knickers-colt.cyclic.app/users/delete/${_id}`)
    .then((res) => {
     return   dispatch(Deletedatasucess());
    }).catch((e)=> {
    return    dispatch(Deletedatafai())
    })
 }

 
 // -------------  Updated post   ----------- //

export const  UpdatedPost  =(_id,payload) => (dispatch) => {
   dispatch(updatedpostReq())
   return axios.patch(`https://tough-knickers-colt.cyclic.app/users/update/${_id}`, payload)
    .then((res) => {
     return   dispatch(updateducess(res.data));
    }).catch((e)=> {
    return    dispatch(updatedFail())
    })
 }




//  ---------- Signup -------------- //

export const  Signupdata = (payload) => (dispatch) => {
  dispatch(getsignReq())
  return axios.post(`https://tough-knickers-colt.cyclic.app/users/create`,payload)
     .then((res)=>{
       return dispatch(getsignSucess(res))
     })
       .catch((err)=> {
           dispatch(getsignFail())
       })
}

// -------------- Login ------------------ //

export const  Loginupdata = (payload) => (dispatch) => {
   dispatch(getLoginReq())
   return axios.post(`https://tough-knickers-colt.cyclic.app/users/login`,payload)
      .then((res)=>{
        return dispatch(getloginSucess(res))
      })
        .catch((err)=>{
           console.log(err)
            dispatch(getLoginFail())
        })
}

// ------------------- User data ----------------- 


export const  GetUserdata =  (dispatch) => {
   dispatch(getuserReq())
   return axios.get(`https://tough-knickers-colt.cyclic.app/users`)
      .then((res)=>{
        return dispatch(getuserSucess(res.data))
      })
        .catch((err)=>{
           console.log(err)
            dispatch(getuserFail())
        })
}



