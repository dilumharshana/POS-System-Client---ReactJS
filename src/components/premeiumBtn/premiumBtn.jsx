import { useHistory } from "react-router";
import { Button, Paper } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import GroupIcon from "@material-ui/icons/Group";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

//styles
import { styles } from "./premiumBtnStyles";

export const PremiumBtn = () => {
  const history = useHistory();

  const classes = styles()();
  return (
    <Paper elevation={4}>
      <Box
        p={2}
        className={classes.root}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box className={classes.heading} ml={2} mr={2}>
          Better Buissnes Features ?
        </Box>

        <Box className={classes.body} p={2} display="flex" mb={2}>
          <Box ml={1}>
            <BookmarkIcon />
          </Box>
          <Box ml={1}>
            <ShowChartIcon />
          </Box>
          <Box ml={1}>
            <GroupIcon />
          </Box>
          <Box ml={1}>
            <AttachMoneyIcon />
          </Box>
          <Box ml={1}>
            <AssessmentIcon />
          </Box>
          <Box ml={1}>
            <TransferWithinAStationIcon />
          </Box>
          <Box ml={1}>
            <GroupAddIcon />
          </Box>
          <Box ml={1}>
            <AutoDeleteIcon />
          </Box>
        </Box>

        <Button
          variant="outlined"
          className={classes.btn}
          onClick={() => history.push("/payments")}
        >
          TRY Premium
        </Button>
      </Box>
    </Paper>
  );
};
