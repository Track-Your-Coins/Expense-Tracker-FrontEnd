import {
  FETCH_EXPENSE_START,
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_FAILURE,
  ADD_EXPENSE_START,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAILURE,
  UPDATE_EXPENSE_START,
  UPDATE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_FAILURE,
  DELETE_EXPENSE_START,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAILURE
} from "../actions/expenseActions";

const initialState = {};

export const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPENSE_START:
      return {};
    default:
      return state;
  }
};
