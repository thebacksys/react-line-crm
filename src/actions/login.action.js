import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGIN_STATUS,
  server,
  apiUrl
} from "../Constants";
import axios from "axios";
import liff from "@line/liff";

export const setStateToFetching = () => ({
  type: LOGIN_FETCHING
});

export const setStateToSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const setStateToFailed = payload => ({
  type: LOGIN_FAILED,
  payload
});

export const setStateToLogout = () => ({
  type: LOGOUT
});

export const login = ({ username, password, history }) => {
  return dispatch => {
    liff.init(
      { liffId: `1655673351-zR2WKaj5` },
      data => {
        console.log("init line success");
      },
      err => {
        console.log("init line error");
      }
    );
  };
};

export const reLogin = () => {
  return dispatch => {
    const loginStatus = localStorage.getItem(LOGIN_STATUS);
    if (loginStatus === "ok") {
      dispatch(setStateToSuccess({}));
    }
  };
};

export const isLoggedIn = () => {
  const loginStatus = localStorage.getItem(LOGIN_STATUS);
  return loginStatus === "ok";
};

export const logout = ({ history }) => {
  return dispatch => {
    localStorage.removeItem(LOGIN_STATUS);
    localStorage.removeItem("user");

    dispatch(setStateToLogout());
    history.push("/");
  };
};

export const setSuccess = payload => {
  return dispatch => {
    dispatch(setStateToSuccess(payload));
  };
};

export const hasError = payload => {
  return dispatch => {
    dispatch(setStateToFailed(payload));
  };
};
