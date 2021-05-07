import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#101010",
    zIndex: "-20",
    minWidth: "320px",
    height: "100vh",
  },
  mainGrid: {
    minHeight: "568px",
    width: "inherit",
    height: "inherit",
  },
  upperLeft: {
    borderRadius: " 0 50px 50px 0",
    display: "flex",
    background: "linear-gradient(270deg, #333333 , #33333300)",
  },
  lowerRight: {
    borderRadius: " 50px  0  0 50px",
    display: "flex",
    background: "linear-gradient(90deg, #333333,  #33333300)",
    overflow: "hidden",
    paddingLeft: "40px",
  },
  menuContainer: {
    background: "linear-gradient(90deg,#33333300,  #333333)",

    [theme.breakpoints.up("xs")]: {
      borderRadius: "0",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      borderRadius: "0 25px 25px 0",
      width: "80%",
    },
    alignContent: "center",
    justifyContent: "flex-end",
  },
  socialMedia: {
    background:
      "linear-gradient(0deg, rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 0.8) 83.85%)",
    borderRadius: "25px 25px 0 0",
    borderBottom: "0",
    border: "#F2F2F2",
    [theme.breakpoints.up("xs")]: {
      height: "80px",
      width: "100px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "155px",
      width: "240px",
    },
  },
  socialMediaIcon: {
    [theme.breakpoints.up("xs")]: {
      height: "40px",
      width: "40px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "75px",
      width: "75px",
    },
  },
  floatingContainer: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      height: "568px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "720px",
    },
    display: "flex",
    alignItems: "flex-end",
  },
  floatingGrid: {
    height: "inherit",
  },
  onFront: {
    zIndex: "10",
  },
  photo: {
    [theme.breakpoints.up("xs")]: {
      width: "300px",
      height: "400px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "650px",
      height: "720px",
    },
  },
  nameFont: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.6rem",
    },
  },
  subTitleFont: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.8rem",
    },
  },
  bodyFont: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1rem",
    },
  },
  menuBox: {
    height: "100px",
  },
  footerBox: {
    [theme.breakpoints.up("xs")]: {
      height: "100px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "155px",
    },
  },
  footerText: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.4rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.5rem",
    },
    background:
      "radial-gradient(50% 50% at 50% 50%, #333333 0%, #33333300 100%)",
  },
  middleContentBox: {
    flexGrow: "1",
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },
  santiIcon: {
    [theme.breakpoints.up("xs")]: {
      width: "75px",
      height: "75px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "150px",
      height: "150px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "300x",
      height: "300x",
    },
  },
  santiIconHidden: {
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      width: "0x",
      height: "100px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "0x",
      height: "150px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "0x",
      height: "300x",
    },
  },
  menuItemsBox: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      marginLeft: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px",
      marginLeft: "0",
    },
    marginRight: "10%",
    height: "100%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  contractedPrimary: {
    //animationName: "$contractToNormal",
    //animationDuration: "1s",
    height: "50%",
  },
  extendedPrimary: {
    height: "66%",
  },
  contractedSecondary: {
    height: "33%",
    paddingRight: "0.5%",
  },
  extendedSecondary: {
    height: "50%",
    paddingRight: "5%",
  },
  "@keyframes extendToLarge": {
    "0%": { height: "50%" },
    "100%": { height: "66%" },
  },
  spacer: {
    width: "5%",
  },
  noSpacer: {
    width: "0",
  },
  nameAndTitleBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      width: "250px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "350px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "450px",
    },
  },
  transitionable: {
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.complex,
    }),
  },
}));

export default useStyles;
