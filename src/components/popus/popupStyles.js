export const styles = (deviceWidth) => ({
  popupWrapper: {
    zIndex: 3000,
    left: " 0",
    top: "0",
    right: "0",
    bottom: "0",
    position: deviceWidth < 1280 ? null : "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  popupBox: {
    position: "absolute",
    color: "gree",
    width: "auto",
    height: "auto",
    top: deviceWidth < 1280 ? "55%" : "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overFlow: "auto",
  },
});
