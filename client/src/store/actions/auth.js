import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};

export const authSuccess = () => {
  return {
    type: actionTypes.AUTH_SUCCESS
  };
};

export const authFail = () => {
  return { type: actionTypes.AUTH_FAIL };
};

export const authRedirect = () => {
  return { type: actionTypes.SET_AUTH_REDIRECT_PATH };
};

export const setErrBool = () => {
  return { type: actionTypes.SET_ERR_BOOL };
};

export const auth = (username, password) => {
  return dispatch => {
    const authData = {
      username: username,
      password: password
    };
    dispatch(authStart());
    axios
      .post("http://localhost:5000/api/auth/login", authData, {
        withCredentials: true
      })
      .then(x => {
        console.log(x);
        dispatch(authSuccess());
        dispatch(authRedirect());
      })
      .catch(err => dispatch(authFail()));
  };
};
