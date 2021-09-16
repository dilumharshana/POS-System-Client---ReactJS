import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles({
    card: {
      width: "70%",

      border: "1px solid #8c8c8c",
    },
    image: {
      height: 100,
    },
    seacrhRoot: {
      width: "80%",
    },
    searchBox: {
      width: "100%",
    },
    cardContent: {
      background: "#f6f5fc",
    },
    shopName: {
      textAlign: "center",
      color: "#5b5a61",
      fontWeight: "bold",
      fontFamily: "arial ,sans-serif",
      paddingTop: "8px",
    },
  });
