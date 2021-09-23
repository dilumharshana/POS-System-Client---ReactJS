import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Box,
  CardHeader,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import StoreIcon from "@mui/icons-material/Store";

//components
import { DeletePopup } from "./deletePopup";
import { SystemPasswordBox } from "../../system password box/systemPasswordBox";

//assests
import grocery from "../../../assests/systems/grocery.jpg";

//styles
import { styles } from "./possystemsStyles";

//system loader
import { handleSystemLoader } from "./handleSystemLoader";

//formik
import { systemPasswordHandler } from "../../../configs/systemPasswordValidation";

export const SystemList = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  //style config
  const classes = styles()();
  const {
    system: { name: systemName, id: systemID, password },
    _id,
  } = props;

  const history = useHistory();

  //open pos system
  const loadSystem = async () => {
    try {
      await handleSystemLoader(
        systemID,
        password,
        formik.values.password,
        history
      );
    } catch (error) {
      console.log(error);
    }
  };
  const formik = systemPasswordHandler(loadSystem)();

  return (
    <>
      <Grid item>
        <Box display="flex" justifyContent="center" mb={2}>
          <Card className={classes.card} elevation={3}>
            <CardHeader
              title={
                <Box display="flex" alignItems="center">
                  <Box>
                    <StoreIcon className={classes.shopLogo} />
                  </Box>
                  <Box ml={2}>
                    {" "}
                    <Typography className={classes.shopName}>
                      {systemName}
                    </Typography>
                  </Box>
                </Box>
              }
              action={
                <DeletePopup
                  systemID={systemID}
                  _id={_id}
                  systemPassword={password}
                />
              }
            />
            <SystemPasswordBox
              open={openDialog}
              name="password"
              label="Password"
              title="Enter password to login"
              close={() => setOpenDialog(false)}
              formik={formik}
              dialogAction={
                <>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => setOpenDialog(false)}
                  >
                    CANCEL
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    LOGIN
                  </Button>
                </>
              }
            />
            <CardActionArea onClick={() => setOpenDialog(true)}>
              <CardMedia image={grocery} className={classes.image} />
              <CardContent className={classes.cardContent}>
                <Box display="flex">
                  <Box className={classes.settingsBtn}>
                    <IconButton size="normal">
                      <SettingsIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </>
  );
};
