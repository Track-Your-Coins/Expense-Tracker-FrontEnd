import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import LoginForm from "./components/navbar/forms/Login";
//import Register from "./components/navbar/forms/Register";
//import Dashboard from "./components/home/dashboard/Dashboard";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        {/* <Route path="/signup" component={Register} />
        <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
