import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import jwt from "jsonwebtoken";

const initialState = {
  userId: null,
  email: null,
  error: null,
  expireIn: 0,
  invalid: null,
  loading: false
};

const userStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const userSuccess = (state, action) => {
  // if user is invalid when logged in
  if (action.userData.invalidUser) {
    return updateObject(state, {
      invalid: action.userData.invalidUser,
      loading: false
    });
  }

  localStorage.setItem("token", action.userData.jwt);
  let userData = jwt.decode(action.userData.jwt);
  return updateObject(state, {
    userId: userData.user.id,
    email: userData.user.email,
    expireIn: userData.exp,
    error: null,
    invalid: null,
    loading: false
  });
};

const userFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    invalid: null,
    loading: false
  });
};

const userSignout = (state, action) => {
  localStorage.clear();
  return updateObject(state, {
    expireIn: 0,
    email: null,
    userId: null
  });
};

const userSignedIn = (state, action) => {
  let token = localStorage.getItem("token");
  let userData = token ? jwt.decode(token) : null;
  return updateObject(state, {
    userId: userData ? userData.user.id : null,
    email: userData ? userData.user.email : null,
    expireIn: userData ? userData.exp : null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_START:
      return userStart(state, action);
    case actionTypes.USER_SUCCESS:
      return userSuccess(state, action);
    case actionTypes.USER_FAIL:
      return userFail(state, action);
    case actionTypes.USER_SIGNOUT:
      return userSignout(state, action);
    case actionTypes.USER_SIGNEDIN:
      return userSignedIn(state, action);
    default:
      return state;
  }
};

export default reducer;
