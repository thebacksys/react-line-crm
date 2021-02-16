import {
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  IS_REGISTER,
  DISPLAY_NAME
} from "../Constants";
import axios from "axios";
import liff from "@line/liff";

export const setStateToFetching = () => ({
  type: REGISTER_FETCHING
});

export const setStateToSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload
});

export const setStateToFailed = payload => ({
  type: REGISTER_FAILED,
  payload
});

export const register = ({
  fullname,
  mobile,
  customerCode,
  email,
  address,
  history
}) => {
  return dispatch => {};
};

export const isRegister = () => {
  liff.init(
    { liffId: `1655673351-zR2WKaj5` },
    data => {
      localStorage.setItem(IS_REGISTER, false);
      localStorage.setItem(DISPLAY_NAME, data.displayName);
      console.log(data);
      console.log("init line success");
    },
    err => {
      localStorage.setItem(IS_REGISTER, false);
      console.log("init line error");
    }
  );
  const isRegisterStatus = localStorage.getItem(IS_REGISTER);
  return isRegisterStatus === true;
};
