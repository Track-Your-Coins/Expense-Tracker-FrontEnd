import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_INCOME_START = "FETCH_INCOME_START";
export const FETCH_INCOME_SUCCESS = "FETCH_INCOME_SUCCESS";
export const FETCH_INCOME_FAILURE = "FETCH_INCOME_FAILURE";

export const fetchIncome = id => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

export const ADD_INCOME_START = "ADD_INCOME_START";
export const ADD_INCOME_SUCCESS = "ADD_INCOME_SUCCESS";
export const ADD_INCOME_FAILURE = "ADD_INCOME_FAILURE";

export const addIncome = newIncome => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

export const UPDATE_INCOME_START = "UPDATE_INCOME_START";
export const UPDATE_INCOME_SUCCESS = "UPDATE_INCOME_FAILIRE";
export const UPDATE_INCOME_FAILURE = "UPDATE_INCOME_FAILURE";

export const updateIncome = (id, updatedIncome) => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

export const DELETE_INCOME_START = "DELETE_INCOME_START";
export const DELETE_INCOME_SUCCESS = "DELETE_INCOME_SUCCESS";
export const DELETE_INCOME_FAILURE = "DELETE_INCOME_FAILURE";

export const deleteIncome = id => dispatch => {
  dispatch({});
  return axiosWithAuth();
};
