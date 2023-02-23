import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./auth.type";

console.log(localStorage.getItem("token"))
const initalState = {
    isAuth: sessionStorage.getItem("isAuth")||false,
    token: sessionStorage.getItem("token")||"",
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
      case USER_LOGIN_REQUEST:
        return { ...state, isLoading: true };
      case USER_LOGIN_SUCCESS:
        sessionStorage.setItem("token",payload)
        sessionStorage.setItem("isAuth",true)
        return { ...state, isLoading: false, isAuth: true, token: payload };
      case USER_LOGIN_FAILURE:
        return { ...state, isLoading: false, isError: true, isAuth: false };
      default:
        return state;
    }
  };
  