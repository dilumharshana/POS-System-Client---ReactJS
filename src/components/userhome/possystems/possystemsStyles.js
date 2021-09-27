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
    shopLogo: { color: "#5b5a61" },
    shopName: {
      color: "#5b5a61",
      fontWeight: "bold",
      fontFamily: "arial ,sans-serif",
      paddingTop: "8px",
    },
    settingsBtn: {
      marginLeft: "auto",
    },
    noSystemBannerRoot: {
      background: "#e0e0e0",
      border: "1px solid #949494",
      borderRadius: "10px",
      color: "#454141",
      fontFamily: "arial",
      fontWeight: "bold",
    },
  });
