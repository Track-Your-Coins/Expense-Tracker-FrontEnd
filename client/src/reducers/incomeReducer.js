import {
  FETCH_INCOME_START,
  FETCH_INCOME_SUCCESS,
  FETCH_INCOME_FAILURE,
  ADD_INCOME_START,
  ADD_INCOME_SUCCESS,
  ADD_INCOME_FAILURE,
  UPDATE_INCOME_START,
  UPDATE_INCOME_SUCCESS,
  UPDATE_INCOME_FAILURE,
  DELETE_INCOME_START,
  DELETE_INCOME_SUCCESS,
  DELETE_INCOME_FAILURE
} from "../actions/incomeActions";

const initialState = {
  income: [],
  error: "",
  addingIncome: false,
  fetchingIncome: false
};

export const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME_START:
      return {
        ...state,
        addingIncome: true
      };
    case ADD_INCOME_SUCCESS:
      return {
        ...state,
        income: action.payload
      };
    case ADD_INCOME_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_INCOME_START:
      return {
        ...state,
        fetchingIncome: true
      };
    case FETCH_INCOME_SUCCESS:
      return {
        ...state,
        income: action.payload
      };
    case FETCH_INCOME_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
