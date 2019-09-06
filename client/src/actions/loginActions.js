import { axiosWithAuth } from "../utils/axiosWithAuth";

//new user registration
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signUp = newUser => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post("/api/auth/register", newUser)
    .then(res => {
      console.log("signUp Action", res);
      localStorage.setItem("token", red.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({});
  return axiosWithAuth();
};
