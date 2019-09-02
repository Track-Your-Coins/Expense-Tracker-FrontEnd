import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { expenseReducer } from "./expenseReducer";
import { incomeReducer } from "./incomeReducer";

export default combineReducers({
  login: loginReducer,
  expense: expenseReducer,
  income: incomeReducer
});
