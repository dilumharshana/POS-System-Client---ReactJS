import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Grid,
  Box,
  AppBar,
  Button,
  Toolbar,
  Tabs,
  Tab,
} from "@material-ui/core";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router";

//components
import { Profile } from "../../components/userhome/profile/profile";
import { PosSystems } from "../../components/userhome/possystems/possystems";
import { Options } from "../../components/userhome/options/options";

//action
import { setUserData } from "../../state/actions/actionLoadUser/setUserData";
import { setDeviceWidth } from "../../state/actions/actionDeviceWidth/Action-deviceWidth";

//styles
import { styles } from "./userhomestyles";

export const UserHome = () => {
  const loaduser = bindActionCreators(setUserData, useDispatch());
  const setNewDeviceWidth = bindActionCreators(setDeviceWidth, useDispatch());

  const deviceWidth = useSelector((store) => store.deviceWidth);

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    loaduser();
  }, [deviceWidth]);
  console.log(deviceWidth);

  window.onresize = () => setNewDeviceWidth();

  //styles
  const classes = styles()();

  const history = useHistory();

  //large screens
  const pcView = () => (
    <>
      <AppBar className={classes.bar}>
        <Toolbar>
          <h3>EVONPOS</h3>
          <Button
            className={classes.btnLogOut}
            variant="contained"
            onClick={() => {
              localStorage.removeItem("userInfo");
              history.push("/login");
            }}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
      <Grid container>
        <Grid lg={3} xl={3}>
          <Profile />
        </Grid>
        <Grid lg={6} xl={6}>
          <PosSystems />
        </Grid>
        <Grid lg={3} xl={3}>
          <Options />
        </Grid>
      </Grid>
    </>
  );

  //small screens
  const mobileView = () => {
    const tabProps = (index) => ({
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    });

    const TabPanel = (props) => {
      const { children, value, index } = props;
      return <div>{value === index && <Box>{children}</Box>}</div>;
    };

    return (
      <>
        <AppBar>
          <Tabs
            value={tabValue}
            indicatorColor="secondary"
            variant="fullWidth"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label="Systems"
              icon={<SurroundSoundIcon />}
              {...tabProps(0)}
            />
            <Tab label="Options" icon={<AddCircleIcon />} {...tabProps(1)} />
            <Tab label="Profile" icon={<PersonIcon />} {...tabProps(2)} />
          </Tabs>
        </AppBar>
        <Toolbar />
        <Toolbar />
        <TabPanel value={tabValue} index={0}>
          <PosSystems />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Options />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Profile />
        </TabPanel>
      </>
    );
  };

  if (deviceWidth >= 1280) return pcView();
  return mobileView();
};
