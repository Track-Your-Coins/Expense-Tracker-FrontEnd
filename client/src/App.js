import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/navbar/forms/Login";
import Register from "./components/navbar/forms/Register";
import Dashboard from "./components/home/dashboard/Dashboard";
import LandingPage from "./components/home/LandingPage";
import AddExpenseForm from "./components/expenses/AddExpenseForm";
import ExpenseList from "./components/expenses/ExpenseList";
import AddIncomeForm from "./components/income/AddIncomeForm";
import IncomeList from "./components/income/IncomeList";

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
          <Route path="/expenses" component={ExpenseList} />
          <Route path="/add-income" component={AddIncomeForm} />
          <Route path="/income" component={IncomeList} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
