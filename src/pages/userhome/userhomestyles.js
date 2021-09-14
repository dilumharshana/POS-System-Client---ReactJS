import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles({
    root: {
      height: window.innerHeight,
      overflowY: "scroll",
    },
    btnLogOut: {
      marginLeft: "auto",
    },
  });
