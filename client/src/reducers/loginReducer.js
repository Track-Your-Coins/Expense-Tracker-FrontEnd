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
  error: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        addingUsers: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        addingUsers: false,
        error: ""
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingUsers: false
      };
    default:
      return state;
  }
};
