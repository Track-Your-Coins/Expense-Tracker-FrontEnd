import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import LoginForm from "./components/navbar/forms/Login";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Track Your Coins in App</h1>
      <Footer />
      <Switch>
        <Route path="/login" component={LoginForm} />
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </div>
  );
}

export default withRouter(App);
