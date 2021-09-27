import { makeStyles } from "@material-ui/core";

export const styles = (divHeight) =>
  makeStyles((theme) => ({
    createASystemText: {
      textAlign: "center",
    },
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
      width: "80%",
      height: theme.spacing(7),
      border: "1px solid #bababa",
      borderRadius: "5px",
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
