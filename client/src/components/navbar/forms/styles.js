import LoginPhoto from "../../images/login.png";

export const SignInFormStyles = {
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${LoginPhoto})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: "64px 32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: "8px",
    backgroundColor: "#f50057"
  },
  form: {
    width: "100%",
    marginTop: "8px"
  },
  submit: {
    margin: "24px 0 16px"
  }
};


