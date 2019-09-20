import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchIncome } from "../../actions/incomeActions";
import Typography from "@material-ui/core/Typography";

const Income = props => {
  const { income, expenses, error } = props;

    useEffect(() => {
        getIncome()
    },[]);

    const getIncome = async () => {
         const id = localStorage.getItem("user_id");
        const allIncome = await props.fetchIncome(id);
    }

  //total income
  const totalIncome = income.reduce((acc, x) => acc + x.amount, 0);

  //total expenses
      const Num = [];
    let expenseAmount = expenses.forEach(num => {
      Num.push(Number(num.amount))
  })
  let reducedExpenses = Num.reduce((acc, ex) => acc + ex, 0);
    const totalExpenses = Math.round(reducedExpenses)

    //remiander
    const remainder = totalIncome - totalExpenses

  return (
    <div>
      <h6>Total Income</h6>
      <h5> ${totalIncome} </h5>
      <h6>Total Expenses</h6>
      <h5> ${totalExpenses} </h5>
      <h6>Remaining</h6>
      <h5> ${remainder} </h5>
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
