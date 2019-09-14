import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addIncome } from "../../actions/incomeActions";
import LoggedInNavBar from "../navbar/LoggedInNavBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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

const AddIncomeForm = props => {
  console.log(props);
  const classes = useStyles();
  const [input, setInput] = useState({
    user_id: localStorage.getItem("user_id"),
    payor: "",
    amount: 0
  });
  console.log(input);

  const handleChange = e => {
    e.persist();
    setInput(input => ({
      ...input,
      [e.target.name]: e.target.value
    }));
  };

  const addNewIncome = e => {
    e.preventDefault();
    props.addIncome(input);
    props.history.push("/dashbaord"); //figure this out. rendering an empty dashboard upon successful add
  };

  return (
    <div>
      <LoggedInNavBar />
      <div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Add New Income
            </Typography>
            <form onSubmit={addNewIncome}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="payor"
                    name="payor"
                    type="payor"
                    label="Payor"
                    value={input.payor}
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
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                  >
                    {props.addingIncome ? (
                      <Loader
                        type="ThreeDots"
                        color="#ffffff"
                        height={12}
                        width={26}
                      />
                    ) : (
                      "Add Income"
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
  error: state.income.error,
  addingIncome: state.income.addingIncome,
  income: state.income.income
});

export default connect(
  mapStateToProps,
  { addIncome }
)(AddIncomeForm);
