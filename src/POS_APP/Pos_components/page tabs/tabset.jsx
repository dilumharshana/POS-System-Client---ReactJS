import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { IconButton } from "@material-ui/core";

//icons
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import GroupsIcon from "@mui/icons-material/Groups";
import FaceIcon from "@mui/icons-material/Face";
import SettingsIcon from "@mui/icons-material/Settings";

import { styles } from "./pageTabsStyles";

export const TabSet = (props) => {
  const classes = styles()();
  return (
    <>
      <Tabs
        orientation={props.deviceWidth < 1280 ? "horozontal" : "vertical"}
        variant="scrollable"
        value={props.value}
        onChange={props.handleChange}
        sx={{ borderLeft: 1, borderColor: "divider" }}
        TabIndicatorProps={{
          style: {
            width: "3px",
            background: "red1",
          },
        }}
      >
        <Tab
          icon={
            <IconButton className={classes.icons}>
              <HomeIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton className={classes.icons}>
              <AddIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton className={classes.icons}>
              <MultilineChartIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton className={classes.icons}>
              <GroupsIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton className={classes.icons}>
              <FaceIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton className={classes.icons}>
              <SettingsIcon />
            </IconButton>
          }
        />
      </Tabs>
    </>
  );
};
