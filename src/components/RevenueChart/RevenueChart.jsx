import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
    },
  },
}));

export default function RevenueChart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h2>Chart</h2>
        <h2>Chart</h2>
        <h2>Chart</h2>
        <h2>Chart</h2>
        <h2>Chart</h2>
        <h2>Chart</h2>
        <h2>Chart</h2>
        <h2>Chart</h2>
        <h2>Chart</h2>
      </Paper>
    </div>
  );
}
