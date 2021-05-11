import {
  createMuiTheme,
  Typography,
  makeStyles,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
  Grid,
} from "@material-ui/core";
import React from "react";
import FancyScroller from "../FancyScroller";
import NavBar from "./NavBar";

let theme = createMuiTheme({
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
theme = responsiveFontSizes(theme);

const scrollerContents = [
  "Let's start here...",
  "I'm Santiago Cabo.",
  "I'm a Software Engineer.",
  "I wanted to show off this component.",
  "It involves a lot of CSS manipulation.",
  "It's responsive. Try it on mobile!",
  "And of course, it uses React.",
  "Thank you for checking it out!",
  "The End.",
];

const useStyle = makeStyles((theme) => ({
  landingPageMainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#333333",
    alignSelf: "flex-start",
  },
  posRelative: {
    position: "relative",
  },
  leftBracket: {
    height: "100%",
    width: "30%",
    borderRadius: "2vh",
    [theme.breakpoints.up("lg")]: { border: "1vw solid #F4B780" },
  },
  leftOpacity: {
    width: "15%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#333333",
  },
}));

function LandingPage(props) {
  const classes = useStyle(props);

  const createScrollerText = ({
    contents = "",
    isStart = false,
    scrollBoxHeigth = 1000,
    color = "textPrimary",
    variant = "h3",
    key,
  }) => {
    return (
      <div
        key={key}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Typography
          align="center"
          variant={variant}
          color={key % 2 === 0 ? "textPrimary" : "secondary"}
          className={classes.typographyH2}
        >
          {contents}
        </Typography>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className={classes.landingPageMainContainer}>
          <NavBar />
          <Grid container>
            <Grid
              item
              container
              justify="flex-end"
              xs={0}
              lg={3}
              className={classes.posRelative}
            >
              <div className={classes.leftBracket}></div>
              <div className={classes.leftOpacity}></div>
            </Grid>
            <Grid item container justify="center" xs={12} lg={6}>
              <FancyScroller threshold={0.25} height={800} width={1000}>
                {scrollerContents.map((c, i) =>
                  createScrollerText({ contents: c, isStart: i === 0, key: i })
                )}
              </FancyScroller>
            </Grid>
            <Grid
              item
              container
              justify="flex-start"
              xs={0}
              lg={3}
              className={classes.posRelative}
            >
              <div className={classes.leftBracket}></div>
              <div className={classes.leftOpacity}></div>
            </Grid>
          </Grid>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default LandingPage;
