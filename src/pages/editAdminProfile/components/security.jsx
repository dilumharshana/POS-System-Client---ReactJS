import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Input,
} from "@material-ui/core";
import { toast } from "react-toastify";
import LockIcon from "@mui/icons-material/Lock";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

//configs
import { config } from "../../../configs/jsonConfig";

//style
import { style } from "./editProfileStyles";
import "react-toastify/dist/ReactToastify.css";

//name validation
import { validateAdminPassword } from "../../../configs/adminDataUpdateValidation";

//toast notification configs
const toastConfigs = {
  position: "bottom-right",
  theme: "colored",
};

export const Security = () => {
  //store
  const currentUser = useSelector((store) => store.currentUser);
  const deviceWidth = useSelector((store) => store.deviceWidth);

  //states
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  //name Update
  const updatePassword = async () => {
    try {
      const response = await axios.put(
        `/api/users/updateAdminSecurity/${currentUser._id}`,
        {
          currentPassword: formik.values.oldPassword,
          newPassword: formik.values.password,
        },
        toastConfigs
      );
      toast.success(response.data, toastConfigs);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data, toastConfigs);
    }
  };

  //formik config
  const useFormik = validateAdminPassword(updatePassword);
  const formik = useFormik();

  const classes = style(deviceWidth)();

  return (
    <>
      {/* //heading */}
      <Grid className={classes.topicRoots}>
        <Box
          mt={5}
          display="flex"
          alignItems="flex-end"
          justifyContent={deviceWidth > 1280 ? "flex-start" : "center"}
        >
          <Box>
            <LockIcon className={classes.icons} />
          </Box>
          <Box ml={1}>
            <Typography className={classes.topics}>
              Security and sign In
            </Typography>
          </Box>
        </Box>
        <hr className={classes.lines} />
      </Grid>

      {/* //password area */}

      <Grid className={classes.nameRoot}>
        <form onSubmit={formik.handleSubmit}>
          {/* //old password */}
          <Box mt={3}>
            <TextField
              name="oldPassword"
              variant="filled"
              fullWidth
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Current Password"
              type={showPassword ? "text" : "password"}
              error={formik.touched.oldPassword && formik.errors.oldPassword}
              helperText={
                formik.errors.oldPassword && formik.errors.oldPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* //new password */}
          <Box mt={3}>
            <TextField
              name="password"
              type={showNewPassword ? "text" : "password"}
              variant="filled"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="New Password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* //retype password */}
          <Box mt={3}>
            <TextField
              name="retypePassword"
              type={showRePassword ? "text" : "password"}
              variant="filled"
              fullWidth
              value={formik.values.retypePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Retype Password"
              error={
                formik.touched.retypePassword &&
                Boolean(formik.errors.retypePassword)
              }
              helperText={formik.errors.retypePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowRePassword(!showRePassword)}
                    >
                      {showRePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* //save btn */}
          <Box
            mt={3}
            display="flex"
            className={classes.saveBtnRoot}
            justifyContent={deviceWidth > 1280 ? "flex-end" : "center"}
          >
            <Box mb={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.saveBtn}
              >
                Save
              </Button>
            </Box>
          </Box>
        </form>
      </Grid>
    </>
  );
};
