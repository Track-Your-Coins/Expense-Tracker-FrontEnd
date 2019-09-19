import React from "react";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export const mainListItems = (
  <div>
    <ListItem button component={NavLink} to={"/dashboard"}>
      <ListItemIcon>
        <DashboardIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={NavLink} to={"/expenses"}>
      <ListItemIcon>
        <AttachMoneyIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="View Expenses" />
    </ListItem>
    <ListItem button component={NavLink} to={"/income"}>
      <ListItemIcon>
        <AccountBalanceWalletIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="View Income" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component={NavLink} to={"/add-expense"}>
      <ListItemIcon>
        <AddCircleOutlineIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Add Expense" />
    </ListItem>
    <ListItem button component={NavLink} to={"/add-income"}>
      <ListItemIcon>
        <AddCircleIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Add Income" />
    </ListItem>
  </div>
);
