import React from 'react';
import DashBoardHeader from './DashBoardComponents/DashBoardHeader';
import { Grid, Divider } from '@material-ui/core';
import TotalInfo from './DashBoardComponents/TotalInfo';
import IndividualBalanceInfo from './DashBoardComponents/IndividualBalanceInfo';
const Dashboard = () => {
    return (<>
        <DashBoardHeader />
        <Divider />
        <Grid container alignItems="center" >
            <Grid item xs={4}>
                <TotalInfo name="total balance" balance="0.00" />
            </Grid>
            <Grid item xs={4}>
                <TotalInfo name="you owe" balance="0.00" />
            </Grid>
            <Grid item xs={4}>
                <TotalInfo name="you are owed" balance="0.00" />
            </Grid>
        </Grid>
        <Divider />
        <IndividualBalanceInfo/>
        <Divider />
    </>)
}

export default Dashboard