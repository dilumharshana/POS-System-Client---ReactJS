import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles({
    root: {
      background: "transparent",
      boxShadow: "none",
    },
    menuTexts: {
      top: "5vh",
      fontFamily: "arial",
      fontWeight: "bold",
    },
    loginButton: {
      top: "2vh",
      right: "2vh",
      color: "white",
      marginLeft: "auto",
      background: "transparent",
      border: "1px solid orange",
    },

    // mobile styles
    mobileRoot: {
      top: "2vh",
      background: "transparent",
      boxShadow: "none",
    },
    mobileBrandName: {
      marginLeft: "auto",
      fontFamily: "Ubuntu, sans-serif",
      color: "white",
    },
    mobileLoginIcon: {
      marginLeft: "auto",
    },
    drawerContainer: {
      height: "100vh",
    },
    drawerItems: {
      fontSize: "4vw",
    },
    drawerBrandName: {
      fontSize: "6vw",
      fontFamily: "Ubuntu, sans-serif",
    },
  });
