import {
  createMuiTheme,
  CssBaseline,
  Grid,
  Button,
  ThemeProvider,
  Typography,
  Slide,
  Box,
  Tooltip,
} from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";
import classNames from "classnames";
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

//TODO: Make social media link to somewhere
//TODO: Fix social media box's responsiveness

function PageBase({ showPhoto, showSocialMedia, children }) {
  if (showPhoto == null) showPhoto = false;
  if (showSocialMedia == null) showSocialMedia = false;
  const classes = useStyles(theme);
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Box className={classes.root}>
          {showPhoto && (
            <div className={classes.floatingContainer}>
              <Slide
                direction="up"
                in={true}
                timeout={theme.transitions.duration.complex}
                mountOnEnter
              >
                <Grid container className={classes.floatingGrid}>
                  <Grid
                    container
                    item
                    xs={12}
                    lg={6}
                    justify="center"
                    alignItems="flex-end"
                  >
                    <Box className={classes.photo}>
                      <img
                        src="https://storage.googleapis.com/nice-stack-312405-static-web-content/Santiago_Cabo-BW-T-SM.png"
                        alt=""
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={0} lg={2}></Grid>
                  <Grid item xs={0} lg={2}></Grid>
                  <Grid item xs={0} lg={2}></Grid>
                </Grid>
              </Slide>
            </div>
          )}
          <Grid container direction="column" className={classes.mainGrid}>
            {children}
            <Grid
              item
              container
              className={classes.footerBox}
              alignContent="flex-end"
            >
              <Grid item xs={12} lg={4}></Grid>
              <Grid
                container
                item
                xs={12}
                lg={4}
                alignContent="center"
                justify="center"
                className={classes.footerText}
              >
                <Typography
                  variant="caption"
                  color="textPrimary"
                  className={classes.onFront}
                  style={{ fontSize: "inherit" }}
                >
                  Copywright Santiago Ariel Cabo. All rights reserved.
                </Typography>
              </Grid>
              <Grid item container xs={12} lg={4} justify="center">
                <Slide
                  direction="up"
                  in={true}
                  timeout={theme.transitions.duration.complex}
                  mountOnEnter
                >
                  <Grid
                    item
                    container
                    xs={6}
                    lg={6}
                    className={classNames(classes.socialMedia, classes.onFront)}
                    justify="center"
                    alignContent="center"
                  >
                    <Grid
                      container
                      item
                      xs={6}
                      justify="center"
                      alignContent="center"
                    >
                      <Tooltip title="LikedIn">
                        <Button
                          className={classes.socialMediaIcon}
                          aria-label="linkedin"
                          style={{ color: "#F2F2F2" }}
                          disableFocusRipple
                          disableRipple
                        >
                          <LinkedIn
                            color="secondary"
                            className={classes.socialMediaIcon}
                          ></LinkedIn>
                        </Button>
                      </Tooltip>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={6}
                      justify="center"
                      alignContent="center"
                    >
                      <Tooltip title="GitHub">
                        <Button
                          disableFocusRipple
                          disableRipple
                          className={classes.socialMediaIcon}
                          aria-label="github"
                          style={{ color: "#FEA500" }}
                        >
                          <GitHub className={classes.socialMediaIcon}></GitHub>
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Slide>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default PageBase;
