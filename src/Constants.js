export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const PROFILE_FETCHING = "PROFILE_FETCHING";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILED = "PROFILE_FAILED";

export const KIOSK_FETCHING = "KIOSK_FETCHING";
export const KIOSK_SUCCESS = "KIOSK_SUCCESS";
export const KIOSK_FAILED = "KIOSK_FAILED";

export const RESETPASSWORD_FETCHING = "RESETPASSWORD_FETCHING";
export const RESETPASSWORD_SUCCESS = "RESETPASSWORD_SUCCESS";
export const RESETPASSWORD_FAILED = "RESETPASSWORD_FAILED";

export const apiUrl = process.env.REACT_APP_API_URL;
export const imageUrl = "";

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";

export const LOGIN_STATUS = "LOGIN_STATUS";

export const server = {
  LOGIN_URL: `login`,
  LIST_KIOSK_URL: `kiosk`,
  PROFILE_URL: `profile`,
  LOGIN_PASSED: `yes`,
  RESET_PASSWORD_URL: `resetpassword`
};

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";
