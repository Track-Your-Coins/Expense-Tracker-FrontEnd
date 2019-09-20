import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchExpense } from "../../actions/expenseActions";
import LoggedInNavBar from "../navbar/LoggedInNavBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: "82vh"
  }
}));

const ExpenseList = props => {
  console.log("Expense List Props:", props);
  const { expenses } = props;
  console.log(expenses);
  const classes = useStyles();

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    props.fetchExpense(id);
  }, []);

  return (
    <div>
      <LoggedInNavBar />
      <Paper className={classes.paper}>
        <h6>Expenses</h6>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Outstanding?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { expenses ?
            expenses.map(expense => {
                return (
                  <TableRow key={expense.id}>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>{expense.amount}</TableCell>
                    <TableCell>{expense.notes}</TableCell>
                    <TableCell>{expense.paid ? "no" : "yes"}</TableCell>
                  </TableRow>
                )
            }) : null
             }
          </TableBody>
        </Table>
      </Paper>
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
  )(ExpenseList)
);
