import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  getDown: {
    marginTop: '10%',
    marginLeft: '30%',
    marginRight: '20%'
  },
  flexDirectionColumn: {
    display: 'grid',
    gridTemplateColumns: '40px 50px auto 100px 100px 40px',
    gridTemplateRows: '25% 100px 20%',
    gridRowGap: '10px',
    gridColumnGap: '5px',
  }
});

const Login = () => {
  const classes = useStyles();
  return (<div className={classes.getDown}>
    <Paper variant="outlined" style={{ height: 223 }}>
      <div className={classes.flexDirectionColumn}>
        <div className="inputDiv">
        <TextField
          id="outlined-username-input"
          label="Username"
          type="text"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        </div>
        <div className = "buttonsDiv">
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Button variant="contained" color="primary">
            Register
            </Button>
        </div>

      </div>
    </Paper>

  </div>)
}

export default Login;