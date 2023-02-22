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


export const login = (userData) => (dispatch) => {
  dispatch(loginRequestAction())

  return axios.post(`${BASE_URL}/user/login`, userData)
    .then((res) => {
      console.log(res);
      dispatch(loginSuccessAction(res.data.token))
      return {"status":res.data.status, "msg": res.data.message}
    }).catch((err) => {
      console.log(err);
      dispatch(loginFailureAction())
    })
} 
