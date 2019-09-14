import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchExpense } from "../../actions/expenseActions";

const ExpenseTable = props => {
  console.log("Expense Table Props:", props);
  return <div>Hello from Expenses</div>;
};

const mapStateToProps = state => ({
  error: state.expense.error,
  expenses: state.expense.expenses
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchExpense }
  )(ExpenseTable)
);
