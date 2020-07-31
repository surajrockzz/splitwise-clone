import React from "react";
import { Grid, Divider } from "@material-ui/core";
import IndividualBalanceInfo from "./IndividualBalanceInfo";

const IndividualBalanceInfoContainer = () => {
  let owedUsers = [
    {
      name: "suraj penugonda",
      amount: "You owe Rs100",
    },
    {
      name: "Disco Raja",
      amount: "You owe Rs200",
    },
  ];

  let ownedUsers = [
    {
      name: "Ala vaikuntapuramplo",
      amount: "You owned Rs1000",
    },
    {
      name: "Sarileru nekavvaru",
      amount: "You owned Rs2000",
    },
    {
      name: "ENtha manchivaduvura",
      amount: "You owned Rs3000",
    },
  ];

  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={6}>
          <h5>You Owe</h5>
        </Grid>
        <Grid item xs={6}>
          <h5>You are owned</h5>
        </Grid>
      </Grid>
      <Divider />
      <Grid container direction="row" alignItems="flex-start">
        <IndividualBalanceInfo users={owedUsers} />
        <IndividualBalanceInfo users={ownedUsers} />
      </Grid>
    </>
  );
};
export default IndividualBalanceInfoContainer;
