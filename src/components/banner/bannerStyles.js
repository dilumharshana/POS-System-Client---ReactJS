import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles({
    videoContainer: {
      position: "relative",
    },
    displayText: {
      zIndex: "2",
    },
    useFreeBtn: {
      position: "absolute",
      width: "10vw",
      height: "6vh",
    },
    bannerContent: {
      position: "absolute",
      top: "60%",
    },
    brandName: {
      position: "absolute",
      top: "12vw",
    },
    description: {
      top: "18vw",
    },
    useFreeBtn: {
      width: "10vw",
      height: "6vh",
      background: "transparent",
      border: "1px solid white",
      color: "white",
    },
    expandButton: {
      border: "1px solid white",
      borderRadius: "50%",
      color: "white",
      top: "90%",
    },

    //mobile styles

    mobileBannerContainer: {
      position: "absolute",
    },

    mobileUseFreeBtn: {
      top: "30vw",
      width: "auto",
      height: "6vh",
      background: "transparent",
      border: "1px solid white",
      color: "white",
    },
  });
