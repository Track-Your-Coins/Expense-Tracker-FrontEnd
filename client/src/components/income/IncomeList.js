import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchIncome } from "../../actions/incomeActions";
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
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    padding: theme.spacing(8),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  }
}));

const IncomeList = props => {
  const { income } = props;
  const classes = useStyles();

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    props.fetchIncome(id);
  });

  return (
    <div>
      <LoggedInNavBar />
      <Paper className={classes.paper}>
        <h6>Income</h6>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Payor</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {income.map(income => (
              <TableRow key={income.id}>
                <TableCell>{income.payor}</TableCell>
                <TableCell>{income.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.income.error,
  fetchingIncome: state.income.fetchingIncome,
  income: state.income.income
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchIncome }
  )(IncomeList)
);
