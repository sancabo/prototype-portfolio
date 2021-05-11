import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const NavBar = (props) => {
  const useStyle = makeStyles((theme) => ({
    navBarContainer: {
      display: "flex",
      flexDirection: "row",
      placeItems: "center",
      placeContent: "center",
      height: "80px",
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
      marginBottom: "5vh",
    },
  }));
  const classes = useStyle();
  return (
    <div className={classes.navBarContainer}>
      <Typography align="center" variant="overline">
        Fancy 3d Scroll Box!
      </Typography>
    </div>
  );
};

export default NavBar;
