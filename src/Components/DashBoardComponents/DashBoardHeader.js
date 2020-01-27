import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import classNames from 'classnames';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    btnGreen: {
        color: 'white',
        backgroundColor: green[300]
    },
    btnOrange: {
        color: 'white',
       backgroundColor: orange[500]
    },
    btn: {
        fontWeight:700,
        marginTop: '3%',
        marginRight: '1%'
    }
  });
const DashBoardHeader = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={6}>
                        <h2>Dashboard</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" className={classNames(classes.btnOrange,classes.btn)}>Add Expense</Button>
                        <Button variant="contained" className={classNames(classes.btnGreen,classes.btn)}>Settle up</Button>
                    </Grid>
                </Grid>
        </div>
    )
}

export default DashBoardHeader;