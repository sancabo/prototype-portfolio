import {
  createMuiTheme,
  Grid,
  Typography,
  Slide,
  Box,
  Icon,
} from "@material-ui/core";
import React, { useState } from "react";
import classNames from "classnames";
import santiIcon from "../resources/Santi-Icon-02.svg";
import PageBase from "../PageBase/PageBase";
import useStyles from "../style/myStyles";

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: "#333333",
      main: "#4F4F4F",
      light: "#828282",
    },
    secondary: {
      main: "#2D9CDB",
    },
    text: {
      primary: "#F2F2F2",
      secondary: "#2D9CDB",
    },
  },
});

//TODO: Put a carousel
//TODO: Put vectors at each slide of the carousel
//TODO: Animate the vectors

function LandingPage() {
  const classes = useStyles(theme);
  const [hovering, setHovering] = useState(false);
  return (
    <PageBase showPhoto={true} showSocialMedia={true}>
      <Grid container item className={classes.menuBox} justify="center">
        <Slide
          direction="down"
          in={true}
          timeout={theme.transitions.duration.complex}
          mountOnEnter
        >
          <Grid
            item
            container
            className={classes.menuContainer}
            justify="center"
            alignContent="flex-end"
          >
            <Box className={classes.menuItemsBox}>
              <Grid
                container
                xs={12}
                justify="space-between"
                alignContent="center"
              >
                <Grid item>
                  <Typography
                    variant="body"
                    color="textPrimary"
                    className={classes.bodyFont}
                  >
                    Home
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body"
                    color="textPrimary"
                    className={classes.bodyFont}
                  >
                    Portfolio
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body"
                    color="textPrimary"
                    className={classes.bodyFont}
                  >
                    Blog
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body"
                    color="textPrimary"
                    className={classes.bodyFont}
                  >
                    Contact
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Slide>
      </Grid>
      <Grid item container direction="row" className={classes.middleContentBox}>
        <Grid
          item
          xs={12}
          lg={hovering ? 3 : 6}
          container
          className={
            hovering
              ? classNames(
                  classes.upperLeft,
                  classes.onFront,
                  classes.contractedSecondary,
                  classes.transitionable
                )
              : classNames(
                  classes.upperLeft,
                  classes.onFront,
                  classes.extendedSecondary,
                  classes.transitionable
                )
          }
          alignItems="center"
        >
          <Grid container item xs={12} direction="column" alignItems="flex-end">
            <div style={{ display: "flex" }}>
              <Icon
                className={
                  hovering ? classes.santiIconHidden : classes.santiIcon
                }
                style={{
                  transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.complex,
                  }),
                }}
              >
                <img src={santiIcon} alt="santiIcon" />
              </Icon>
              <div
                className={
                  hovering
                    ? classNames(classes.spacer, classes.transitionable)
                    : classNames(classes.spacer, classes.transitionable)
                }
              ></div>
              <div className={classes.nameAndTitleBox}>
                <Typography
                  variant="h3"
                  color="textPrimary"
                  className={classNames(classes.onFront, classes.nameFont)}
                >
                  Santiago Cabo
                </Typography>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  className={classNames(classes.onFront, classes.subTitleFont)}
                >
                  Software Engineer
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          xs={0}
          lg={hovering ? 9 : 6}
          className={classes.transitionable}
        ></Grid>
        <Grid
          item
          xs={0}
          lg={hovering ? 3 : 6}
          className={classes.transitionable}
        ></Grid>
        <Grid
          item
          xs={12}
          lg={hovering ? 9 : 6}
          container
          direction="column"
          className={
            hovering
              ? classNames(
                  classes.lowerRight,
                  classes.onFront,
                  classes.extendedPrimary,
                  classes.transitionable
                )
              : classNames(
                  classes.lowerRight,
                  classes.onFront,
                  classes.contractedPrimary,
                  classes.transitionable
                )
          }
          alignItems="flex-start"
          justify="center"
          onMouseEnter={(event) => setHovering(true)}
          onMouseLeave={(event) => setHovering(false)}
        >
          <Typography
            variant="body"
            color="textPrimary"
            className={classNames(classes.onFront, classes.bodyFont)}
          >
            Implementing service oriented solutions for 5+ years.
          </Typography>
          <Typography
            variant="body"
            color="textPrimary"
            className={classNames(classes.onFront, classes.bodyFont)}
          >
            Ever-changing business concerns.
          </Typography>
          <Typography
            variant="body"
            color="textPrimary"
            className={classNames(classes.onFront, classes.bodyFont)}
          >
            Valuing autonomy and the courage to try something new.
          </Typography>
        </Grid>
      </Grid>
    </PageBase>
  );
}

export default LandingPage;
