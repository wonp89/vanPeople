import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
var jwt = require("jsonwebtoken");

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const userStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const userSuccess = (state, action) => {
  localStorage.setItem("token", action.userData.jwt);
  let userData = jwt.decode(action.userData.jwt);
  return updateObject(state, {
    email: userData.user.email,
    userId: userData.user.id,
    error: null,
    loading: false
  });
};

const userSignout = (state, action) => {
  localStorage.clear();
  return updateObject(state, {
    token: null,
    userId: null,
    error: null,
    loading: false
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
    default:
      return state;
  }
};

export default reducer;
