import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchExpense } from "../../actions/expenseActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const ExpenseTable = props => {
  console.log("Expense Table Props:", props);
  const { expenses } = props;
  console.log(expenses);

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    props.fetchExpense(id);
  });

  //add a btn that says view expense that opens up to a modal
  //add delete & update btns

  return (
    <div>
      <h6>Expenses</h6>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map(expense => {
            if (expense) {
              return (
                <TableRow key={expense.id}>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.amount}</TableCell>
                  <TableCell>{expense.notes}</TableCell>
                </TableRow>
              );
            } else {
              return null;
            }
          })}
        </TableBody>
      </Table>
    </div>
  );
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
