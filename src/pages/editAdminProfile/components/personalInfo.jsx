import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { toast } from "react-toastify";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

//action
import { setUserData } from "../../../state/actions/actionLoadUser/setUserData";

//configs
import { config, imageConfigs } from "../../../configs/jsonConfig";

//style
import { style } from "./editProfileStyles";
import "react-toastify/dist/ReactToastify.css";

//name validation
import { validateName } from "../../../configs/adminDataUpdateValidation";

//toast notification configs
const toastConfigs = {
  position: "bottom-right",
  theme: "colored",
};

export const PersonalInfo = () => {
  //store
  const currentUser = useSelector((store) => store.currentUser);
  const deviceWidth = useSelector((store) => store.deviceWidth);

  //states
  const [loading, setLoading] = useState(false);
  const loadUser = bindActionCreators(setUserData, useDispatch());

  //image uploading
  const uploadImage = async (image) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", image);

      await axios.post(
        `/api/users/profilePicture/${currentUser._id}`,
        formData,
        imageConfigs
      );

      loadUser();
      setLoading(false);
      toast.success("Profile Picture updated !", {
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        position: "bottom-right",
        theme: "colored",
      });
    }
  };

  //remove image
  const removeImage = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/users/profilePicture/${currentUser._id}`);
      setLoading(false);
      loadUser();
      toast.success("Profile Picture updated !", {
        position: "bottom-right",
      });
    } catch (err) {
      toast.error("Profile icon remove failed !", {
        position: "bottom-right",
      });
    }
  };

  //name Update
  const updateName = async () => {
    try {
      const response = await axios.post(
        `/api/users/updateinfo/${currentUser._id}`,
        {
          name: formik.values.name,
        },
        config
      );
      toast.success(response.data.message, toastConfigs);
    } catch (err) {
      console.log(err);
      toast.error("unable to update user", toastConfigs);
    }
  };

  //formik config
  const useFormik = validateName(currentUser.name, updateName);
  const formik = useFormik();

  const classes = style(deviceWidth)();

  console.log("first");

  return (
    <>
      <Grid className={classes.closeIconRoot}>
        <Box mt={3} display="flex" justifyContent="flex-end" mr={5}>
          <CloseIcon size="large" />
        </Box>
      </Grid>

      {/* //personal informatio */}

      {/* //heading */}
      <Grid className={classes.topicRoots}>
        <Box
          mt={3}
          display="flex"
          alignItems="flex-end"
          justifyContent={deviceWidth > 1280 ? "flex-start" : "center"}
        >
          <Box>
            <AccountCircleIcon className={classes.icons} />
          </Box>
          <Box ml={1}>
            <Typography className={classes.topics}>
              Personal Information
            </Typography>
          </Box>
        </Box>
        <hr className={classes.lines} />
      </Grid>

      {/* //profile picture area */}
      <Grid>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box mt={3} display="flex" alignItems="flex-end">
            <Box>
              <Avatar
                alt={currentUser.name}
                src={currentUser.adminProfilePicture}
                className={classes.avatar}
              />
            </Box>
            <Box className={classes.camIcon}>
              <label htmlFor="icon-button-file">
                <input
                  accept=".jpg , .png"
                  id="icon-button-file"
                  type="file"
                  className={classes.fileInput}
                  onChange={(e) => uploadImage(e.target.files[0])}
                />
                <IconButton className={classes.camBtn} component="span">
                  <CameraAltIcon />
                </IconButton>
              </label>
            </Box>
          </Box>
        )}
        <Box mt={2} mb={4}>
          <Typography className={classes.removeText} onClick={removeImage}>
            remove
          </Typography>
        </Box>
      </Grid>

      {/* //name area */}

      <Grid className={classes.nameRoot}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            name="name"
            variant="filled"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Name"
            onChange={formik.handleChange}
            error={formik.touched && Boolean(formik.errors.name)}
            helperText={formik.errors.name}
          />
          <Box
            mt={3}
            display="flex"
            className={classes.saveBtnRoot}
            justifyContent={deviceWidth > 1280 ? "flex-end" : "center"}
          >
            <Box>
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
