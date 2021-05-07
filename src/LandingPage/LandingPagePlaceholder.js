import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles((theme) => ({
  backdropPaper: {
    with: "800px",
    backgroundColor: theme.palette.primary,
  },
  root: {
    height: "100vh",
    backgroundColor: theme.palette.primary,
    paddingLeft: "10vh",
    paddingRight: "10vh",
  },
}));

function LandingPagePlaceholder() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: "#333333" }}>
      <div style={{ height: "500px" }} />
      <LinearProgress> </LinearProgress>
    </div>
  );
}

export default LandingPagePlaceholder;
