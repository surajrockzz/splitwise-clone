import React, { useContext, useEffect } from 'react';
import DashBoardHeader from './DashBoardComponents/DashBoardHeader';
import { Grid, Divider } from '@material-ui/core';
import TotalInfo from './DashBoardComponents/TotalInfo';
import { AuthContext } from '../App';
import { Redirect } from "react-router-dom";
import IndividualBalanceInfoContainer from './DashBoardComponents/IndividualBalanceInfoContainer';


const Dashboard = () => {
    const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);
    console.log(isAuthenticated, 'in dashboard component')
    return (<>
        {!isAuthenticated ? <Redirect to="/login" /> : (<>
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
            <IndividualBalanceInfoContainer />
            <Divider />
        </>)}</>)
}

export default Dashboard