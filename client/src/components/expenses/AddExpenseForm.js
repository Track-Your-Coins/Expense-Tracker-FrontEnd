import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenseActions";
import LoggedInNavBar from "../navbar/LoggedInNavBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}));

const AddExpenseForm = props => {
  console.log(props);
  const classes = useStyles();
  const [input, setInput] = useState({
    user_id: localStorage.getItem("user_id"),
    date: "",
    category: "",
    amount: 0,
    notes: "",
    paid: false
  });
  console.log(input);

  const handleChange = e => {
    e.persist();
    setInput(input => ({
      ...input,
      [e.target.name]: e.target.value
    }));
  };

  const addNewExpense = e => {
    e.preventDefault();
    props.addExpense(input);
    if (props.expenses) {
      console.log(props.expenses);
      props.history.push("/dashbaord"); //need to figure out why routing to empty dashboard.
    } else {
      alert("There was an error adding that expense. Please try again.");
    }
  };

  return (
    <div>
      <LoggedInNavBar />
      <div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Add New Expense
            </Typography>
            <form onSubmit={addNewExpense}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="date"
                    name="date"
                    type="date"
                    value={input.date}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="category"
                    name="category"
                    label="Category"
                    value={input.category}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="amount"
                    name="amount"
                    label="Amount"
                    value={input.amount}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="notes"
                    name="notes"
                    label="notes"
                    value={input.notes}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="secondary"
                        name="paid"
                        value={!input.paid}
                        onChange={handleChange}
                      />
                    }
                    label="check if paid"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                  >
                    {props.addingExpense ? (
                      <Loader
                        type="ThreeDots"
                        color="#ffffff"
                        height={12}
                        width={26}
                      />
                    ) : (
                      "Add Expense"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.expense.error,
  addingExpense: state.expense.addingExpense,
  expenses: state.expense.expenses
});

export default connect(
  mapStateToProps,
  { addExpense }
)(AddExpenseForm);
