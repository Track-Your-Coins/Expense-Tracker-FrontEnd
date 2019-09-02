import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_EXPENSE_START = "FETCH_EXPENSE_START";
export const FETCH_EXPENSE_SUCCESS = "FETCH_EXPENSE_SUCCESS";
export const FETCH_EXPENSE_FAILURE = "FETCH_EXPENSE_FAILURE";

export const fetchExpense = id => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

export const ADD_EXPENSE_START = "ADD_EXPENSE_START";
export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_FAILURE = "ADD_EXPENSE_FAILURE";

export const addExpense = newExpense => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

export const UPDATE_EXPENSE_START = "UPDATE_EXPENSE_START";
export const UPDATE_EXPENSE_SUCCESS = "UPDATE_EXPENSE_FAILIRE";
export const UPDATE_EXPENSE_FAILURE = "UPDATE_EXPENSE_FAILURE";

export const updateExpense = (id, updatedExpense) => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

export const DELETE_EXPENSE_START = "DELETE_EXPENSE_START";
export const DELETE_EXPENSE_SUCCESS = "DELETE_EXPENSE_SUCCESS";
export const DELETE_EXPENSE_FAILURE = "DELETE_EXPENSE_FAILURE";

export const deleteExpense = id => dispatch => {
  dispatch({});
  return axiosWithAuth();
};
