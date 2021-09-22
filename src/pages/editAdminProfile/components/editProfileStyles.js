import { makeStyles } from "@material-ui/core";

export const style = (deviceWidth) =>
  makeStyles((theme) => ({
    closeIconRoot: {
      width: "100%",
    },
    icons: {
      color: "#595959",
    },
    topics: {
      textAlign: deviceWidth < 1280 ? "center" : "left",
      color: "#595959",
    },
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    topicRoots: {
      width: deviceWidth < 1280 ? "100%" : "60%",
    },
    camIcon: {
      zIndex: "2000",
      marginLeft: "-30px",
      border: "1px solid #595959",
      borderRadius: "50%",
    },
    camBtn: {
      background: theme.palette.background.paper,
    },
    fileInput: {
      display: "none",
    },
    removeText: {
      textAlign: "center",
      fontFamily: "arial",
      color: "#d96a6a",
      opacity: "0.5",
      "&&:hover": {
        cursor: "pointer",
        color: "#e84f4f",
        opacity: "1",
      },
    },
    nameRoot: {
      width: deviceWidth < 1280 ? "80%" : "30%",
    },
    saveBtnRoot: {
      width: "100%",
    },
    saveBtn: {
      fontFamily: "arial",
    },
  }));
