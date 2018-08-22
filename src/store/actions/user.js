import * as actionTypes from "./actionTypes";
import axios from "axios";

//to setup loading image while logging in or sigining up
export const userStart = () => {
  return {
    type: actionTypes.USER_START
  };
};

export const userSuccess = userData => {
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

export const userSignout = () => {
  return {
    type: actionTypes.USER_SIGNOUT
  };
};

export const userSignedIn = userData => {
  return {
    type: actionTypes.USER_SIGNEDIN
  };
};

export const user = ({ email, password, passwordConfirmation = null }) => {
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
      dispatch(userSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(userFail(error));
    }
  };
};
