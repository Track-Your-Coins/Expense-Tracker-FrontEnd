import { axiosWithAuth } from "../utils/axiosWithAuth";

//create expense
export const ADD_EXPENSE_START = "ADD_EXPENSE_START";
export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_FAILURE = "ADD_EXPENSE_FAILURE";

export const addExpense = newExpense => dispatch => {
  dispatch({ type: ADD_EXPENSE_START });
  return axiosWithAuth()
    .post("https://track-your-coins-be.herokuapp.com/api/expenses", newExpense)
    .then(res => {
      dispatch({ type: ADD_EXPENSE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_EXPENSE_FAILURE, payload: err.response });
    });
};

//read expense by user ID
export const FETCH_EXPENSE_START = "FETCH_EXPENSE_START";
export const FETCH_EXPENSE_SUCCESS = "FETCH_EXPENSE_SUCCESS";
export const FETCH_EXPENSE_FAILURE = "FETCH_EXPENSE_FAILURE";

export const fetchExpense = id => dispatch => {
  dispatch({ type: FETCH_EXPENSE_START });
  return axiosWithAuth()
    .get(`https://track-your-coins-be.herokuapp.com/api/users/${id}/expenses`)
    .then(res => {
      dispatch({ type: FETCH_EXPENSE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_EXPENSE_FAILURE, payload: err.response });
    });
};

//update expense
export const UPDATE_EXPENSE_START = "UPDATE_EXPENSE_START";
export const UPDATE_EXPENSE_SUCCESS = "UPDATE_EXPENSE_FAILIRE";
export const UPDATE_EXPENSE_FAILURE = "UPDATE_EXPENSE_FAILURE";

export const updateExpense = (id, updatedExpense) => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

//delete expense
export const DELETE_EXPENSE_START = "DELETE_EXPENSE_START";
export const DELETE_EXPENSE_SUCCESS = "DELETE_EXPENSE_SUCCESS";
export const DELETE_EXPENSE_FAILURE = "DELETE_EXPENSE_FAILURE";

export const deleteExpense = id => dispatch => {
  dispatch({});
  return axiosWithAuth();
};
