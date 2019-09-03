import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import LoginForm from "./components/navbar/forms/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Track Your Coins in App</h1>
      <Switch>
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
