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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";

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
                <Typography className={classes.shopName}>
                  {systemName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </>
  );
};
