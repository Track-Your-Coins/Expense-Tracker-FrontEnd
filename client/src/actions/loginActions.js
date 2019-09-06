import { axiosWithAuth } from "../utils/axiosWithAuth";

//new user registration
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signUp = newUser => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post(
      "https://track-your-coins-be.herokuapp.com/api/auth/register",
      newUser
    )
    .then(res => {
      console.log("signUp Action", res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

//registered user login
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("https://track-your-coins-be.herokuapp.com/api/auth/login", creds)
    .then(res => {
      console.log("loginRes", res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};
