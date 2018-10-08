import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt from "jsonwebtoken";

//to setup loading image while logging in or sigining up
export const userStart = () => {
  return {
    type: actionTypes.USER_START
  };
};

export const userSuccess = (userData, redirect) => {
  redirect.push('/')
  return {
    type: actionTypes.USER_SUCCESS,
    userData: userData
  };
};

export const userFail = error => {
  return {
    type: actionTypes.USER_FAIL,
    error: error
  };
};

export const userSignout = (redirect) => {
  redirect.push('/');
  return {
    type: actionTypes.USER_SIGNOUT
  };
};

export const checkUserTimeout = (expirationTime, redirect) => {
  console.log(`user expire in 2hrs`)
  return dispatch => {
    setTimeout(() => {
      dispatch(userSignout(redirect));
    }, expirationTime * 1000); // 2hrs
  };
};

export const userCheckState = (redirect) => {
  return dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(userSignout(redirect));
    } else {
      // 2hrs after current time
      const expirationTime = new Date(jwt.decode(token).exp * 1000)
      if (expirationTime >= new Date()) {
        //future time(2hrs after) - current time
        dispatch(checkUserTimeout(((expirationTime.getTime() - new Date().getTime()) / 1000), redirect))
      } else {
        dispatch(userSignout(redirect))
      }
    }
  }
}

export const userSignedIn = () => {
  return {
    type: actionTypes.USER_SIGNEDIN
  };
};

export const user = ({ email, password, passwordConfirmation = null }, redirect) => {
  return async dispatch => {
    dispatch(userStart());
    let userData = {
      email: email,
      password: password
    };
    // user login
    let url = "/api/tokens";
    if (!!passwordConfirmation) {
      userData.passwordConfirmation = passwordConfirmation;
      // user create
      url = "/api/users";
    }
    try {
      const res = await axios.post(url, userData);
      console.log(res);
      dispatch(userSuccess(res.data, redirect));
      dispatch(checkUserTimeout(jwt.decode(res.data.jwt).exp), redirect);
    } catch (error) {
      console.log(error);
      dispatch(userFail(error));
    }
  };
};
