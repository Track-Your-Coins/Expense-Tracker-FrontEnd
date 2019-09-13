import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { newExpense } from "../../actions/expenseActions";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const AddExpenseForm = () => {
  return <div>add new expense here</div>;
};

mapStateToProps = state => ({
  error: state.expense.error,
  addingExpense: state.expense.addingExpense
});

export default connect(
  mapStateToProps,
  { newExpense }
)(AddExpenseForm);
