import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchIncome } from "../../actions/incomeActions";
import Typography from "@material-ui/core/Typography";

const Income = props => {
  const { income, expenses, error } = props;
  console.log("EXPENSES", expenses)
  console.log("INCOME", income)

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    props.fetchIncome(id);
  });

  //function to calculate total income
  const totalIncome = income.reduce((acc, x) => acc + x.amount, 0);

  //function to calculate total expenses
  const Num = [];
  let numArr = expenses.forEach(num => {
      Num.push(Number(num.amount))
  })
  let totalExpenses = Num.reduce((acc, ex) => acc + ex, 0);

  return (
    <div>
      <h6>Total Income</h6>
      <h2> {totalIncome} </h2>
      <br />
      <h6>Total Expenses</h6>
      <h2> {totalExpenses} </h2>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.income.error,
  income: state.income.income,
  expenses: state.expense.expenses
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchIncome }
  )(Income)
);
