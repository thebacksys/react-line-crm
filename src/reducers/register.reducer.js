import {
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS
} from "./../Constants";

const initialState = {
  result: null,
  isFetching: false,
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_FETCHING:
      return { ...state, isFetching: true, error: false, result: payload };
    case REGISTER_FAILED:
      return { ...state, isFetching: false, error: true, result: payload };
    case REGISTER_SUCCESS:
      return { ...state, isFetching: false, error: false, result: payload };
    default:
      return state;
  }
};
