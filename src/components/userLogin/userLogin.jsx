import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router";
import { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  Divider,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import { UserAuthTemplate } from "../../pages/UserAuthTemplate/userAuthUserAuthTemplate";
import axios from "axios";

//actions
import { setUserLoginFail } from "../../state/actions/actionUserLoginState/Action-userLoginFail";

//api config file
import { config } from "../../configs/jsonConfig";

//styles
import { styles } from "./userLoginStyles";

//formik form handler
import { formHandler } from "../../configs/validationSchema";

//component
export const UserLogin = () => {
  const history = useHistory();

  //config styles
  const useStyles = styles();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  //user login state
  const userLoginState = bindActionCreators(setUserLoginFail, useDispatch());

  //user authentication function

  const logUser = async () => {
    console.log("hello");
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:2000/api/login",
        formik.values,
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/pos");
      setLoading(false);
    } catch (error) {
      userLoginState({ state: false, message: error.response.data });
      setLoading(false);

      setTimeout(() => userLoginState({ state: true, message: null }), 3000);
    }
  };

  //form statets
  const useFormik = formHandler(logUser);
  const formik = useFormik();

  return (
    <UserAuthTemplate page="Register">
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column">
          <Grid>
            <Box
              item
              pt={2}
              display="flex"
              justifyContent="center"
              pt={4}
              pb={3}
            >
              <h2>Login</h2>
            </Box>
          </Grid>

          <Grid>
            <Box item pt={2} display="flex" justifyContent="center" p={2}>
              <TextField
                fullWidth
                autoComplete="true"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
          </Grid>

          <Grid>
            <Box item pt={2} display="flex" p={2}>
              <TextField
                fullWidth
                name="passwordLogin"
                value={formik.values.passwordLogin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showPassword ? "text" : "password"}
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Password"
                error={
                  formik.touched.passwordLogin &&
                  Boolean(formik.errors.passwordLogin)
                }
                helperText={
                  formik.touched.passwordLogin && formik.errors.passwordLogin
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid>
            <Box item pt={2} display="flex" justifyContent="center">
              {loading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Button type="submit" size="large" variant="contained">
                  Sign In
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item pb={2}>
            <Box className={classes.forgotPasswordLables} p={2}>
              Forget password
            </Box>
          </Grid>

          <Divider light={true} />
          <Grid>
            <Box
              item
              pt={2}
              display="flex"
              justifyContent="center"
              mt={2}
              mb={3}
            >
              <Button size="large" variant="contained">
                Sign In with google
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </UserAuthTemplate>
  );
};
