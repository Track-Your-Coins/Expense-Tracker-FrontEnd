import React from "react";
//import { moneyTransfer } from "../images/moneytransfer.png";

const LandingPage = () => {
  console.log(moneyTransfer);
  const Image = require("../images/moneytransfer.png");
  return (
    <div>
      <h1>Welcome to Track Your Coins</h1>
      <img src={Image} alt="money transfer" />
    </div>
  );
};

export default LandingPage;
