import React from "react";
import { connect } from "react-redux";
//import axiosWithAuth from "../../../utils/axiosWithAuth";
import { loginActions } from "../../../actions/loginActions";
import { Button } from "reactstrap";
import { Field, withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ errors, touched, values }) => {
  return (
    <div>
      <Form>
        <Field name="username" type="text" placeholder="username" />
        {touched.username && errors.username && <p> {errors.username} </p>}
        <Field name="password" type="password" placeholder="password" />
        {touched.password && errors.password && <p> {errors.password} </p>}
        <Button color="success" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validateSchema: Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
  }),
  handleSubmit(values, { props, setSubmittiing }) {
    console.log(props);
    props.actions(values);
    setSubmittiing(false);
    // const propsToSubmit = {
    //   username: values.username,
    //   password: values.password
    // };
    // const url = "auth login url endpoint here";
    // axiosWithAuth
    //   .post(url, values)
    //   .then(res => {
    //     props.props.loginActions(res.data.id);
    //     props.props.history.push(`/dashboard/${res.data.id}`);
    //   })
    //   .catch(err => console.log(err));
  }
})(LoginForm);

const mapStatetoProps = state => {
  return {
    state //or whatever state is from reducers
  };
};

export default connect(
  mapStatetoProps,
  { loginActions }
)(FormikLoginForm);
