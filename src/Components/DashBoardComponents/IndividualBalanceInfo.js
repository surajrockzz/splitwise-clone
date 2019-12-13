import React from 'react'
import { Grid, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    pId:{
        margin: 0,
        padding: '1% 0 1% 0'
    },
    pLeftYo: {
        paddingLeft: '14%' 
    },
    pLeftYao: {
        paddingLeft: '8%' 
    },

});
const IndividualBalanceInfo = ({ name, text }) => {
    const classes = useStyles();
    return (
        <>
            <Grid container alignContent="flex-end">
                <Grid container xs={6} >
                    <Grid item xs={6}>
                        <h5>You Owe</h5>
                    </Grid>
                </Grid>
                <Grid container xs={6}>
                    <Grid item xs={6}>
                        <h5>You are owned</h5>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <Grid container xs={12}>
            <Grid
                container
                item
                direction="column"
                justify="flex-start"
                alignItems="flex-end"
                xs={6}
            >
                <Grid container xs={12} className = {classes.pLeftYo}>
                    <Grid container item xs={1} alignItems="center">
                        <Avatar>RK</Avatar>
                    </Grid>
                    <Grid container item xs={6} direction = "column" alignItems="flex-start" justify="flex-start">
                        <p className = {classes.pId}>Rama Krishna</p>
                        <p className = {classes.pId}>You Owe INR13.33</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                item
                direction="column"
                justify="flex-start"
                alignItems="flex-end"
                xs={6}
            >
                <Grid container xs={12} className = {classes.pLeftYo}>
                    <Grid container item xs={1} alignItems="center">
                        <Avatar>RK</Avatar>
                    </Grid>
                    <Grid container item xs={6} direction = "column" alignItems="flex-start" justify="flex-start">
                        <p className = {classes.pId}>Rama Krishna</p>
                        <p className = {classes.pId}>You Owe INR13.33</p>
                    </Grid>
                </Grid>
            </Grid>
         </Grid>   
        </>
    )
}
export default IndividualBalanceInfo;