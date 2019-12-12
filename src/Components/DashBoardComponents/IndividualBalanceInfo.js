import React from 'react'
import { Grid, Divider } from '@material-ui/core';
const IndividualBalanceInfo = ({ name, text }) => {
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
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    xs={6}
                ><p>suraj</p><p>suraj</p><p>suraj</p></Grid>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    xs={6}
                ><p>suraj</p><p>suraj</p><p>suraj</p></Grid>
            </Grid>
        </>
    )
}
export default IndividualBalanceInfo;