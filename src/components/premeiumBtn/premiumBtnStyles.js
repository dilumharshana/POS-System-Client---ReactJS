import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles((theme) => ({
    root: {
      width: theme.spacing(40),
      background: "#ffb005",
    },
    heading: {
      fontSize: theme.spacing(3),
      textAlign: "center",
      fontWeight: "bold",
      color: "#fff",
      textShadow: "1px 1px 4px grey",
    },
    body: {
      textShadow: "1px 1px 4px #fff",
    },
    btn: {
      width: "70%",
      color: "#fff",
      fontWeight: "bold",
      border: "1px solid #fff",
    },
  }));
