import React from 'react'
import { Grid, Divider } from '@material-ui/core';
import IndividualBalanceInfo from './IndividualBalanceInfo';

const IndividualBalanceInfoContainer = ({ name, text }) => {
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
            <IndividualBalanceInfo/>
            <IndividualBalanceInfo/>
            <IndividualBalanceInfo/>
        </>
    )
}
export default IndividualBalanceInfoContainer;