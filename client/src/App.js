import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import LoggedInNavBar from "./components/navbar/LoggedInNavBar";
import LoginForm from "./components/navbar/forms/Login";
import Register from "./components/navbar/forms/Register";
import Dashboard from "./components/home/dashboard/Dashboard";
import Footer from "./components/footer/Footer";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      {token ? <LoggedInNavBar /> : <NavBar />}
      <div id="app-container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
