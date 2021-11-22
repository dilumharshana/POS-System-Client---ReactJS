import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { IconButton } from "@material-ui/core";

//icons
import HomeIcon from "@mui/icons-material/Home";
import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import GroupsIcon from "@mui/icons-material/Groups";
import FaceIcon from "@mui/icons-material/Face";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { styles } from "./pageTabsStyles";

//actions
import { setTabName } from "../../../state/actions/actionSetTabName/setTabName";

export const TabSet = (props) => {
  useEffect(() => {
    setCurruntTabName("HOME");
  }, []);

  const classes = styles()();
  const history = useHistory();

  //set action
  const setCurruntTabName = bindActionCreators(setTabName, useDispatch());

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
            <IconButton
              className={classes.icons}
              onClick={() => setCurruntTabName("HOME")}
            >
              <HomeIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton
              className={classes.icons}
              onClick={() => setCurruntTabName("STOCKS")}
            >
              <AddIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton
              className={classes.icons}
              onClick={() => setCurruntTabName("ANALYSIS")}
            >
              <MultilineChartIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton
              className={classes.icons}
              onClick={() => setCurruntTabName("EMPLOYEES")}
            >
              <GroupsIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton
              className={classes.icons}
              onClick={() => setCurruntTabName("CUSTOMERS")}
            >
              <FaceIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton
              className={classes.icons}
              onClick={() => setCurruntTabName("SETTINGS")}
            >
              <SettingsIcon />
            </IconButton>
          }
        />
        <Tab
          icon={
            <IconButton
              onClick={() => {
                localStorage.removeItem("UserPosSystem");
                history.push("/login");
              }}
              className={classes.icons}
            >
              <PowerSettingsNewIcon />
            </IconButton>
          }
        />
      </Tabs>
    </>
  );
};
