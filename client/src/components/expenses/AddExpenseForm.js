import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenseActions";
import LoggedInNavBar from "../navbar/LoggedInNavBar";
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
  return (
    <div>
      <LoggedInNavBar />
      <h1>Add new expenses here</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.expense.error,
  addingExpense: state.expense.addingExpense
});

export default connect(
  mapStateToProps,
  { addExpense }
)(AddExpenseForm);
