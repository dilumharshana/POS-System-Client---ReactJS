export const styles = (props) => ({
  divider: {
    borderRight: props.deviceWidth < 1280 ? null : "1px solid  #bfbebb",
    borderBottom: props.deviceWidth < 1280 ? "1px solid  #bfbebb" : null,
  },

  categoryTopics: { textAlign: "center", color: "blue", fontWeight: "bold" },

  btnPremium: { backgroundColor: "#ffb005" },

  btnBackButton: { border: "1px solid black" },

  loading: { width: 100, color: "blue" },
});
