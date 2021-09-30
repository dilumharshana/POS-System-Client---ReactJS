import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles({
    icons: {
      fontSize: "50px",
      border: "1px solid black",
    },
    tabs: {
      "& .MuiTabs-indicator": {
        color: "orange",
      },
    },
  });
