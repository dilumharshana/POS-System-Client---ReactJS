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
import { useHistory } from "react-router";

//components
import { Profile } from "../../components/userhome/profile/profile";
import { PosSystems } from "../../components/userhome/possystems/possystems";
import { Options } from "../../components/userhome/options/options";

//action
import { setUserData } from "../../state/actions/actionLoadUser/setUserData";

//styles
import { styles } from "./userhomestyles";

export const UserHome = () => {
  const [tabValue, setTabValue] = useState(0);
  const loaduser = bindActionCreators(setUserData, useDispatch());
  useEffect(() => loaduser(), []);

  const deviceWidth = useSelector((store) => store.deviceWidth);
  const currentUser = useSelector((store) => store.currentUser);

  //styles
  const classes = styles()();

  const history = useHistory();

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
      <Toolbar></Toolbar>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={4} xl={4}>
          <Profile />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={5} xl={5}>
          <PosSystems />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
          <Options />
        </Grid>
      </Grid>
    </>
  );

  const mobileView = () => {
    const tabProps = (index) => ({
      id: `full-width-tab${index}`,
      "area-controls": `full-width-tabpanel-${index}`,
    });

    const TabPanel = (props) => {
      const { chidren, value, index } = props;
      return <div>{value === index && <Box>{chidren}</Box>}</div>;
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
            <Tab label="Systems" {...tabProps(0)} />
            <Tab label="Options" {...tabProps(1)} />
            <Tab label="Profile" {...tabProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index={0}>
          1
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          2
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          3
        </TabPanel>
      </>
    );
  };

  if (deviceWidth >= 800) return pcView();
  return mobileView();
};
