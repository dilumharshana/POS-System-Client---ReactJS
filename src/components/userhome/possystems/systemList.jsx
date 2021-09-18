import { useState, useEffect } from "react";

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
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import StoreIcon from "@mui/icons-material/Store";

//components
import { DeletePopup } from "./deletePopup";

//assests
import grocery from "../../../assests/systems/grocery.jpg";

//styles
import { styles } from "./possystemsStyles";

export const SystemList = (props) => {
  //style config
  const classes = styles()();
  const {
    system: { name: systemName, id: systemID, password },
    _id,
  } = props;

  return (
    <>
      <Grid item>
        <Box display="flex" justifyContent="center" mb={4}>
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
            <CardActionArea>
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
