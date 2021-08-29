import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, AppBar, Typography, Button } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

//import styles
import { styles } from "./navbarStyles.js";

export const NavBar = (props) => {
  const [drawer, setDrawer] = useState(false);
  const deviceWidth = useSelector((store) => store.deviceWidth);

  //seting styles
  const classes = styles()();

  //large screen navbar
  const pcNavBar = (props) => (
    <AppBar className={classes.root} position="absolute">
      <Toolbar>
        <Box className={classes.menuTexts} mr={2}>
          HOME
        </Box>
        <Box className={classes.menuTexts} mr={2}>
          Docs
        </Box>
        <Box className={classes.menuTexts}>Blog</Box>
        {props.noLoginBtn === true ? (
          <h1 style={{ marginLeft: "auto" }}>EVONPOS</h1>
        ) : (
          <Button className={classes.loginButton} variant="contained">
            <Link to="/login" exact>
              Login
            </Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );

  //mobile and tabs navbar
  const mobileNavBar = () => (
    <AppBar className={classes.mobileRoot} position="absolute">
      <Toolbar>
        <IconButton
          edge="start"
          style={{ color: "white" }}
          aria-label="open drawer"
        >
          <MenuIcon fontSize="large" onClick={() => setDrawer(true)} />
          {/* //side drawer */}
          <SwipeableDrawer
            open={drawer}
            anchor="left"
            onClose={() => setDrawer(false)}
            className={classes.drawer}
          >
            <Box className={classes.drawerContainer}>
              <Box
                className={classes.drawerBrandName}
                onClick={() => setDrawer(false)}
                mt={3}
                ml={5}
                mr={8}
              >
                EVONPOS
                <Divider />
              </Box>

              <Box
                className={classes.drawerItems}
                onClick={() => setDrawer(false)}
                mt={3}
                ml={3}
                mr={8}
              >
                Docs
              </Box>
              <Box
                className={classes.drawerItems}
                onClick={() => setDrawer(false)}
                mt={3}
                ml={3}
                mr={8}
              >
                Blog
              </Box>
            </Box>
          </SwipeableDrawer>
        </IconButton>

        <Box className={classes.mobileBrandName}>
          <h1>EVONPOS</h1>
        </Box>

        <IconButton aria-label="Login" className={classes.mobileLoginIcon}>
          {/* //brand name */}
          <AccountCircleSharpIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );

  // return isMobile ? mobileNavBar() : pcNavBar();
  if (deviceWidth <= 800) return mobileNavBar();
  return pcNavBar(props);
};
