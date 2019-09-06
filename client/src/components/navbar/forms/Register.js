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

class Register extends React.Component {
  state = {
    users: {
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      users: {
        ...this.state,
        [e.target.name]: e.target.value
      }
    });
  };

  addNewUser = e => {
    e.preventDefault();
    this.props.addNewUser(this.state).then(res => {
      if (res) {
        this.props.history.push("/login");
      }
    });
    this.setState({
      users: {
        firstname: "",
        lastname: "",
        username: "",
        password: ""
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up!
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                autoFocus
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item>
                  <Button
                    onClick={() => this.props.history.push("/login")}
                    color="success"
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
  { addNewUser },
  withStyles(SignInFormStyles)
)(Register);
