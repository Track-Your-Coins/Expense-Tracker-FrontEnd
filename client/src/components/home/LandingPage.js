import React from "react";
import NavBar from "../navbar/NavBar";
import "./landingpage.css";

const LandingPage = () => {
  const Image = require("../images/landingpagetwo.jpg");
  return (
    <div>
      <NavBar />
      <div className="landing-page-div">
        <h1>Welcome to Track Your Coins</h1>
        <img src={Image} alt="money transfer" />
      </div>
    </div>
  );
};

export default LandingPage;
