import React, { useState, useContext, useEffect } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import {AuthContext} from '../App';
import { Redirect } from "react-router-dom";
import {handleAuthenticationService} from '../services/loginService';

const Login = () => {
  console.log('rendering.......');
  const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const handleUsername = (event) => setUsername(event.target.value) 
  const handlePassword = (event) => setPassword(event.target.value)
  const handleLogin = async () => {
    let response = await handleAuthenticationService({username, password});
    let browserStorage = window.localStorage;
    browserStorage.setItem('x-auth-token', response.token);
    setisAuthenticated(true);
  }

  return (<>
    {!isAuthenticated ? (
    <Paper variant="outlined" className="paperDiv">
      <div className="loginContainer">
        <img className="logoDiv" alt="logo" src="https://via.placeholder.com/150"/>
        <div className="fieldsDiv">
          <TextField
            id="outlined-username-input"
            label="Username"
            type="text"
            variant="outlined"
            className= "inputField"
            value={username}
            onChange={handleUsername}
          />
          <TextField
            id="outlined-password-password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            className= "passwordField"
            onChange={handlePassword}
          />
          <Button variant="contained" color="primary" className="loginButton" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" color="primary" className="registerButton">
            Register
          </Button>
          </div>
      </div>
    </Paper>
  ) : <Redirect to='/dashboard'/> } </>)
}

export default React.memo(Login);