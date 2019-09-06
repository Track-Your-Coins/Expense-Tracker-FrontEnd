import React from "react";
import "./dashboard.css";

class Dashboard extends React.Component {
  render() {
    const DashboardJoy = require("../../images/dashboardjoy.png");
    return (
      <div>
      <div id="dashboard-container">
        <h1>Welcome to your Dashboard!</h1>
        <img src={DashboardJoy} alt="happy girl" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
