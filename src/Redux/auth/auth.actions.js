import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./auth.type";
 const loginRequestAction = () => {
    return { type: USER_LOGIN_REQUEST };
  };
  
 const loginSuccessAction = (payload) => {
    return { type: USER_LOGIN_SUCCESS, payload };
  };
  
 const loginFailureAction = () => {
    return { type: USER_LOGIN_FAILURE };
  };
  
 export const login=(userData)=>(dispatch)=>{
        dispatch(loginRequestAction())
    
    return axios.post("http", userData)
    .then((res)=>{
        console.log(res);
        dispatch(loginSuccessAction(res.token))
    }).catch((err)=>{
        console.log(err);
        dispatch(loginFailureAction())
    })
 } 
