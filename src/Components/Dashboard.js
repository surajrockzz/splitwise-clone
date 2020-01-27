import React from 'react';
import DashBoardHeader from './DashBoardComponents/DashBoardHeader';
import { Grid, Divider } from '@material-ui/core';
import TotalInfo from './DashBoardComponents/TotalInfo';
import IndividualBalanceInfoContainer from './DashBoardComponents/IndividualBalanceInfoContainer';
const Dashboard = () => {
    return (<>
        <DashBoardHeader />
        <Divider />
        <Grid container alignItems="center" >
            <Grid item xs={4}>
                <TotalInfo name="Total Balance" balance="0.00" />
            </Grid>
            <Grid item xs={4}>
                <TotalInfo name="You Owe" balance="0.00" />
            </Grid>
            <Grid item xs={4}>
                <TotalInfo name="You are owned" balance="0.00" />
            </Grid>
        </Grid>
        <Divider />
        <IndividualBalanceInfoContainer/>
        <Divider />
    </>)
}

export default Dashboard