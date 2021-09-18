import { makeStyles } from "@material-ui/core";

export const styles = (divHeight) =>
  makeStyles((theme) => ({
    btnAdd: {
      width: theme.spacing(30),
      height: theme.spacing(10),
      boxShadow: "0 0 3px grey",
      "&::hover": {
        background: "#417cfa ",
        color: "#fff",
      },
    },
    recycleBin: {
      width: "100%",
      height: theme.spacing(7),
      border: "1px solid #8c8c8c",
    },
    systemList: {
      color: divHeight ? "green" : "",
      height: divHeight ? "auto" : 0,
      Transform: "2s",
      overflow: "hidden",
      transitionDuration: "1s",
    },
    restoreBtn: {
      color: "#fff",
    },
  }));
