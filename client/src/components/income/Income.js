import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchIncome } from "../../actions/incomeActions";
import Typography from "@material-ui/core/Typography";

const Income = props => {
  const { income, expenses, error } = props;

    const [expense, setExpense] = useState({
        user_id: localStorage.getItem("user_id"),
        date: "",
        category: "",
        amount: 0,
        notes: "",
        paid: false
    })

    useEffect(() => {
        const id = localStorage.getItem("user_id");
        props.fetchIncome(id);
    },[]);

    //listener for when expenses change
    useEffect(() => {
        setExpense ({
            user_id: localStorage.getItem("user_id"),
            date: expenses.date,
            category: expenses.category,
            amount: expenses.amount,
            notes: expenses.notes,
            paid: expenses.paid
        })
    }, [expenses])

  //total income
  const totalIncome = income.reduce((acc, x) => acc + x.amount, 0);

  //total expenses
  const Num = [];
  let expenseAmount = expenses.forEach(num => {
      Num.push(Number(num.amount))
  })
  let reducedExpenses = Num.reduce((acc, ex) => acc + ex, 0);
    const totalExpenses = Math.round(reducedExpenses)

  return (
    <div>
      <h6>Total Income</h6>
      <h2> ${totalIncome} </h2>
      <br />
      <h6>Total Expenses</h6>
      <h2> ${totalExpenses} </h2>
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
