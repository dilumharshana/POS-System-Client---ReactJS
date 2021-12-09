import { Grid, Box, Paper, AppBar, Toolbar } from "@material-ui/core";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//styles
import { styles } from "./userAuthStyles";

export const UserAuthTemplate = (props) => {
  //user login state
  const userLoginFail = useSelector((store) => store.userLoginState);

  const useStyles = styles();
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Grid
        container
        style={{ height: "100vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <AppBar color="transparent" style={{ boxShadow: "none" }}>
          <Toolbar>
            <Box>
              <Link to="/">
                <Box className={classes.navlinks}>Home</Box>
              </Link>
            </Box>

            <Box style={{ marginLeft: "auto" }}>
              <Link to={props.page === "Login" ? "/login" : "/register"}>
                <Box className={classes.navlinks}>{props.page}</Box>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <Grid item xs={11} sm={11} md={7} lg={3} xl={3}>
          {!userLoginFail.state && (
            <Alert variant="danger">{userLoginFail.message}</Alert>
          )}
          <Paper elevation="3" className={classes.paper}>
            {props.children}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
