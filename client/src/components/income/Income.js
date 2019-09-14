import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchIncome } from "../../actions/incomeActions";
import Typography from "@material-ui/core/Typography";

const Income = props => {
  const { income } = props;

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    props.fetchIncome(id);
  });

  //calculate total income here and render to screen
  return (
    <div>
      <h6>Total Income</h6>
      {income.map(item => (
        <>
          <Typography key={item.id} component="p" variant="h4">
            {item.amount}
          </Typography>
          <Typography color="textSecondary">{item.payor}</Typography>
        </>
      ))}
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
  )(Income)
);
