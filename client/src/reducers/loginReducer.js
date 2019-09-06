import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../actions/loginActions";

const initialState = {
  addingUsers: false,
  error: "",
  loggingIn: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        addingUsers: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
