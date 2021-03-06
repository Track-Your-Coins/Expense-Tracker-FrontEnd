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

const initialState = {
  expenses: [],
  error: "",
  fetchingExpense: false,
  addingExpense: false
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE_START:
      return {
        ...state,
        addingExpense: true
      };
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case ADD_EXPENSE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_EXPENSE_START:
      return {
        ...state,
        fetchingExpense: true
      };
    case FETCH_EXPENSE_SUCCESS:
      return {
        ...state,
        expenses: action.payload
      };
    case FETCH_EXPENSE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
