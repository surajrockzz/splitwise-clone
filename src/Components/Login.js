import React, { useState, useContext } from "react";
import { TextField, Button, Typography, FormControl } from "@material-ui/core";
import { AuthContext } from "../App";
import { overrideComponentStyles } from "../helpers";
import { Redirect } from "react-router-dom";
import { handleAuthenticationService } from "../services/loginService";
import { useHistory } from "react-router-dom";
import PasswordComponent from "./Core/PasswordComponent";

const CTextField = overrideComponentStyles(TextField, {
  root: {
    marginBottom: "1rem",
  },
});

const CFormControl = overrideComponentStyles(FormControl, {
  root: {
    marginBottom: "1rem",
  },
});

const CButton = overrideComponentStyles(Button, {
  root: {
    marginLeft: "0.5rem",
  }
});

const Login = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  let history = useHistory();
  const handleLogin = async () => {
    let response = await handleAuthenticationService({ username, password });
    let browserStorage = window.localStorage;
    browserStorage.setItem("x-auth-token", response.token);
    setisAuthenticated(true);
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="loginContainer flex flex-col lg:flex-row items-center flex-1 pt-3 w-full">
          <img
            className="logoDiv py-10 w-1/4"
            alt="logo"
            src="https://via.placeholder.com/100x100"
          />
          <div className="fieldsDiv flex flex-col flex-1 px-6 w-3/4">
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <CTextField
              id="outlined-username-input"
              label="Username"
              type="text"
              variant="outlined"
              className="inputField flex-1"
              value={username}
              onChange={handleUsername}
            />
            <CFormControl variant="outlined">
              <PasswordComponent
                onChange={handlePassword}
                id="login-password"
                value={password}
              />
            </CFormControl>
            <div className="login-buttons">
              <Button
                variant="contained"
                color="primary"
                className="loginButton"
                onClick={handleLogin}
              >
                Login
              </Button>
              <CButton
                variant="contained"
                color="primary"
                className="registerButton"
                onClick={() => history.push("/signup")}
              >
                Signup
              </CButton>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )}{" "}
    </>
  );
};

export default React.memo(Login);
