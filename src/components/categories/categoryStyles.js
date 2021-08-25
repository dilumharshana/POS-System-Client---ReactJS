import { makeStyles } from "@material-ui/core";

export const styles = (deviceWidth) =>
  makeStyles({
    categoryCard: {
      width: "auto",
      textAlign: "center",
    },
    categoryHeading: {
      fontFamily: "arial",
      textAlign: "center",
      color: "#2e2e2e",
    },
    cardImage: {
      height: 200,
    },
  });
