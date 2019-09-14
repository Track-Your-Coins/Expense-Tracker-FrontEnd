import React from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const mainListItems = (
  <div>
    <ListItem button component={NavLink} to={"/dashboard"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={NavLink} to={"/expenses"}>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="View Expenses" />
    </ListItem>
    <ListItem button component={NavLink} to={"/income"}>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="View Income" />
    </ListItem>
  </div>
);

//need to redirect to login page
const logOut = e => {
  e.preventDefault();
  localStorage.removeItem("token");
  // props.history.push("/login");
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Update Your Expenses</ListSubheader>
    <ListItem button component={NavLink} to={"/add-expense"}>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Add Expense" />
    </ListItem>
    <ListItem button component={NavLink} to={"/add-income"}>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Add Income" />
    </ListItem>
    <ListItem button onClick={logOut}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
