import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles((theme) => ({
    btnAdd: {
      width: theme.spacing(30),
      height: theme.spacing(10),
      boxShadow: "0 0 3px grey",
      "&::hover": {
        background: "#417cfa",
        color: "#fff",
      },
    },
  }));
