import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  marginZero: {
    marginTop: "0",
  },
});
const InformationContainer = ({ name, amount }) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        xs={12}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Grid container xs={1} alignItems="flex-end" alignContent="center">
          <Avatar>SJ</Avatar>
        </Grid>
        <Grid container xs={4} direction="column" alignContent="flex-start">
          <p>{name}</p>
          <p className={classes.marginZero}>{amount}</p>
        </Grid>
      </Grid>
    </>
  );
};
export default InformationContainer;
