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

const initialState = {};

export const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INCOME_START:
      return {};
    default:
      return state;
  }
};
