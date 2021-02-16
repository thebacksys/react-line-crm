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
  return dispatch => {
    dispatch(setStateToSuccess("ok"));
  };
};
