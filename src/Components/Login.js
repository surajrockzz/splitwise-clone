import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { AuthContext } from "../App";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { handleAuthenticationService } from "../services/loginService";

const CustomTextField = withStyles({
  root: {
    marginBottom: "1rem",
  },
})(TextField);

const CustomButton = withStyles({
  root: {
    marginLeft: "1rem",
  },
})(Button);

const Login = () => {
  const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event) => setUsername(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleLogin = async () => {
    let response = await handleAuthenticationService({ username, password });
    let browserStorage = window.localStorage;
    browserStorage.setItem("x-auth-token", response.token);
    setisAuthenticated(true);
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="loginContainer flex flex-row items-center flex-1">
          <img
            className="logoDiv py-10"
            alt="logo"
            src="https://via.placeholder.com/300x300"
          />
          <div className="fieldsDiv flex flex-col flex-1 px-6">
            <CustomTextField
              id="outlined-username-input"
              label="Username"
              type="text"
              variant="outlined"
              className="inputField flex-1"
              value={username}
              onChange={handleUsername}
            />
            <CustomTextField
              id="outlined-password-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              className="passwordField flex-1"
              onChange={handlePassword}
            />
            <div className="login-buttons">
              <Button
                variant="contained"
                color="primary"
                className="loginButton"
                onClick={handleLogin}
              >
                Login
              </Button>
              <CustomButton
                variant="contained"
                color="primary"
                className="registerButton"
              >
                Register
              </CustomButton>
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
