import React from "react";
import "./landingpage.css";

const LandingPage = () => {
  const Image = require("../images/moneytransfer.png");
  return (
    <div className="landing-page-div">
      <h1>Welcome to Track Your Coins</h1>
        <img src={Image} alt="money transfer" />
    </div>
  );
};

export default LandingPage;
