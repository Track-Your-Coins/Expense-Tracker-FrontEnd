import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { signUp } from "../../../actions/loginActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { SignInFormStyles } from "./styles";
import "./login.css";

class Register extends React.Component {
  state = {
    users: {
      first_name: "",
      last_name: "",
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      users: {
        ...this.state.users,
        [e.target.name]: e.target.value
      }
    });
  };

  addNewUser = e => {
    e.preventDefault();
    this.props.signUp(this.state.users).then(res => {
      if (res) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up!
            </Typography>
            <form
              className={classes.form}
              onSubmit={this.addNewUser}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoComplete="first_name"
                autoFocus
                value={this.state.users.first_name}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="last_name"
                autoFocus
                value={this.state.users.last_name}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={this.state.users.username}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.users.password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {this.props.addingUsers ? (
                  <Loader
                    type="ThreeDots"
                    color="#ffffff"
                    height={12}
                    width={26}
                  />
                ) : (
                  "Signup"
                )}
              </Button>
              <Grid container>
                <Grid item>
                  <Button
                    onClick={() => this.props.history.push("/login")}
                    color="default"
                  >
                    {"Already have an Account? Log in"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

//import state from loginReducer from rootReducer
const mapStateToProps = state => ({
  error: state.login.error,
  addingUsers: state.login.addingUsers
});

export default connect(
  mapStateToProps,
  { signUp }
)(withStyles(SignInFormStyles)(Register));
