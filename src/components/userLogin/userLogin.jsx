import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router";
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
import { loginFormHandler } from "../../configs/validationSchema";

//component
export const UserLogin = () => {
  useEffect(() => {
    return () => {
      userLoginState({ state: true, message: null });
    };
  }, []);
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
    try {
      setLoading(true);
      const { data } = await axios.post("/api/login", formik.values, config);

      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/userHome");
      setLoading(false);
    } catch (error) {
      userLoginState({ state: false, message: error.response.data });
      setLoading(false);

      setTimeout(() => userLoginState({ state: true, message: null }), 3000);
    }
  };

  //form statets
  const useFormik = loginFormHandler(logUser);
  const formik = useFormik();

  return (
    <UserAuthTemplate page="Register">
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column">
          {/* //login text */}
          <Grid item>
            <Box pt={2} display="flex" justifyContent="center" pt={4} pb={3}>
              <h2>Login</h2>
            </Box>
          </Grid>

          {/* //email */}
          <Grid item>
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

          {/* //password */}
          <Grid item>
            <Box item pt={2} display="flex" p={2}>
              <TextField
                fullWidth
                name="password"
                value={formik.values.passwordLogin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showPassword ? "text" : "password"}
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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

          {/* //login btn */}
          <Grid item>
            <Box item pt={2} display="flex" justifyContent="center">
              {loading ? (
                <CircularProgress />
              ) : (
                <Button type="submit" size="large" variant="contained">
                  Sign In
                </Button>
              )}
            </Box>
          </Grid>

          {/* //forgot password */}
          <Grid item pb={2}>
            <Box className={classes.forgotPasswordLables} p={2}>
              Forget password
            </Box>
          </Grid>

          <Divider light={true} />

          {/* //google sign in */}
          <Grid item>
            <Box
              item
              pt={1}
              display="flex"
              justifyContent="center"
              mt={2}
              mb={3}
            >
              <Button size="small" variant="contained">
                Sign In with google
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </UserAuthTemplate>
  );
};
