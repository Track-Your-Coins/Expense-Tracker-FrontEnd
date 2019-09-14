import { axiosWithAuth } from "../utils/axiosWithAuth";

//create income
export const ADD_INCOME_START = "ADD_INCOME_START";
export const ADD_INCOME_SUCCESS = "ADD_INCOME_SUCCESS";
export const ADD_INCOME_FAILURE = "ADD_INCOME_FAILURE";

export const addIncome = newIncome => dispatch => {
  dispatch({ type: ADD_INCOME_START });
  return axiosWithAuth()
    .post("https://track-your-coins-be.herokuapp.com/api/income", newIncome)
    .then(res => {
      dispatch({ type: ADD_INCOME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_INCOME_FAILURE, payload: err.response });
    });
};

//read income
export const FETCH_INCOME_START = "FETCH_INCOME_START";
export const FETCH_INCOME_SUCCESS = "FETCH_INCOME_SUCCESS";
export const FETCH_INCOME_FAILURE = "FETCH_INCOME_FAILURE";

export const fetchIncome = id => dispatch => {
  dispatch({ type: FETCH_INCOME_START });
  return axiosWithAuth()
    .get(`https://track-your-coins-be.herokuapp.com/api/users/${id}/income`)
    .then(res => {
      dispatch({ type: FETCH_INCOME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_INCOME_FAILURE, payload: err.response });
    });
};

//update income
export const UPDATE_INCOME_START = "UPDATE_INCOME_START";
export const UPDATE_INCOME_SUCCESS = "UPDATE_INCOME_FAILIRE";
export const UPDATE_INCOME_FAILURE = "UPDATE_INCOME_FAILURE";

export const updateIncome = (id, updatedIncome) => dispatch => {
  dispatch({});
  return axiosWithAuth();
};

//delete income
export const DELETE_INCOME_START = "DELETE_INCOME_START";
export const DELETE_INCOME_SUCCESS = "DELETE_INCOME_SUCCESS";
export const DELETE_INCOME_FAILURE = "DELETE_INCOME_FAILURE";

export const deleteIncome = id => dispatch => {
  dispatch({});
  return axiosWithAuth();
};
