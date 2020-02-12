import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
});





const Login = () => {
  const classes = useStyles();
  return (<div>
    <Paper variant="outlined" className="paperDiv">
      <div className="loginContainer">
        <img className="logoDiv" src="https://via.placeholder.com/150"/>
        <div className="fieldsDiv">
          <TextField
            id="outlined-username-input"
            label="Username"
            type="text"
            variant="outlined"
            className= "inputField"
          />
          <TextField
            id="outlined-password-password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            className= "passwordField"
          />
          <Button variant="contained" color="primary" className="loginButton">
            Login
          </Button>
          <Button variant="contained" color="primary" className="registerButton">
            Register
          </Button>
          </div>
      </div>
    </Paper>

  </div>)
}

export default Login;