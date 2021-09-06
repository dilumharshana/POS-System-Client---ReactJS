export const styles = (deviceWidth) => ({
  popupWrapper: {
    left: " 0",
    top: "0",
    right: "0",
    bottom: "0",
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },

  popupBox: {
    position: "absolute",
    width: "auto",
    height: "auto",
    top: deviceWidth < 1280 ? "58%" : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});
