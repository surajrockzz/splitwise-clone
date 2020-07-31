import React from "react";
import { Grid } from "@material-ui/core";
import InformationContainer from "./InformationContainer";

const IndividualBalanceInfo = ({ users }) => {
  return (
    <Grid container xs={6} direction="column">
      {users.map((user) => (
        <InformationContainer name={user.name} amount={user.amount} />
      ))}
    </Grid>
  );
};

export default IndividualBalanceInfo;
