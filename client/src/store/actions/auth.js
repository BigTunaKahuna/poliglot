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

export const checkLoginStatus = () => {
  return { type: actionTypes.AUTH_CHECK_SUCCESS };
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

export const authCheck = () => {
  return dispatch => {
    let cookieId = document.cookie.slice(3);
    axios
      .get("http://localhost:5000/api/profile/" + cookieId, {
        withCredentials: true
      })
      .then(success => {
        if (success.status === 200) {
          dispatch(checkLoginStatus());
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  };
};
