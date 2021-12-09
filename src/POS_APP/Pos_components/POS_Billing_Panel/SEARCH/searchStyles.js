import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles({
    itemCardRoot: {
      background: "#f7f7f7",
    },
    itemCardContentBox: {
      width: "100%",
      height: 65,
    },
    itemCardName: {
      fontFamily: "arial",
      fontWeight: "bold",
    },
    itemCardPrice: {
      color: "#00c113",
    },
  });
