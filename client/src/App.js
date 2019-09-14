import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/navbar/forms/Login";
import Register from "./components/navbar/forms/Register";
import Dashboard from "./components/home/dashboard/Dashboard";
import LandingPage from "./components/home/LandingPage";
import AddExpenseForm from "./components/expenses/AddExpenseForm";
import ExpenseTable from "./components/expenses/ExpenseTable";

function App() {
  return (
    <div className="App">
      <div id="app-container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add-expense" component={AddExpenseForm} />
          <Route path="/expenses" component={ExpenseTable} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
