import axios from "axios";
import { BASE_URL } from "../../constants/config";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./auth.type";
const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST };
};

const loginSuccessAction = (payload) => {
  console.log(payload)
  return { type: USER_LOGIN_SUCCESS, payload };
};

const loginFailureAction = () => {
  return { type: USER_LOGIN_FAILURE };
};


export const login = (userData) => async (dispatch) => {
  dispatch(loginRequestAction())

  try {
    const res = await axios.post(`${BASE_URL}/user/login`, userData);
    console.log(res);
    if(res.data.status==1){
      dispatch(loginSuccessAction({token:res.data.token,name:res.data.name,email:res.data.email}));
      return { "status": res.data.status, "msg": res.data.message };
    }else{
      dispatch(loginFailureAction());
      return { "status": res.data.status, "msg": res.data.message };

    }
  
  } catch (err) {
    console.log(err);
    dispatch(loginFailureAction());
  }
} 
