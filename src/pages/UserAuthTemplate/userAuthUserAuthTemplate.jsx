import { useSelector } from "react-redux";
import { Grid, Box, Paper } from "@material-ui/core";
import Alert from "react-bootstrap/Alert";

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
      <Grid item xs={11} sm={11} md={8} lg={4} xl={4}>
        {userLoginFail && (
          <Alert variant="danger">Incorrect email or password !</Alert>
        )}
        <Paper elevation="3" className={classes.paper}>
          {props.children}
        </Paper>
      </Grid>
    </Grid>
  );
};
