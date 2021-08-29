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
    <Grid
      container
      style={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <AppBar color="transparent">
        <Toolbar>
          <Box>
            {" "}
            <Link to="/">Home</Link>
          </Box>

          <Box style={{ marginLeft: "auto" }}>
            <Link to={props.page === "Login" ? "/login" : "/register"}>
              {page}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid item xs={11} sm={11} md={8} lg={4} xl={4}>
        {!userLoginFail.state && (
          <Alert variant="danger">{props.message}</Alert>
        )}
        <Paper elevation="3" className={classes.paper}>
          {userLoginFail.message}
        </Paper>
      </Grid>
    </Grid>
  );
};
