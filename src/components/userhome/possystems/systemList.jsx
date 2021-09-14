import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Box,
  CardHeader,
  IconButton,
  Popover,
  Button,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";
import axios from "axios";

//actions
import { setUserData } from "../../../state/actions/actionLoadUser/setUserData";

//assests
import grocery from "../../../assests/systems/grocery.jpg";

//styles
import { styles } from "./possystemsStyles";

export const SystemList = (props) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const loadUser = bindActionCreators(setUserData, useDispatch());

  //style config
  const classes = styles()();

  //delete btn pop over functions
  const handlePopDelete = (event) => setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const {
    system: { name: systemName, id: systemID },
    _id,
  } = props;

  //delete system
  const deleteSystem = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2001/api/possystems/remove",
        { systemID, _id },
        { "content-type": "Application/json" }
      );

      console.log(response);
      loadUser();
      toast.warn("System deleted successfully !", {
        position: "bottom-left",
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Grid item>
        <Box display="flex" justifyContent="center" mb={4}>
          <Card className={classes.card} elevation={3}>
            <CardHeader
              action={
                <div>
                  <IconButton aria-describedBy={id} onClick={handlePopDelete}>
                    <MoreVertIcon />
                  </IconButton>
                  <Popover
                    id={id}
                    open={open}
                    onClose={onClose}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <Button
                      startIcon={<DeleteIcon />}
                      color="secondary"
                      variant="contained"
                      onClick={deleteSystem}
                    >
                      Delete
                    </Button>
                  </Popover>
                </div>
              }
            />
            <CardActionArea>
              <CardMedia image={grocery} className={classes.image} />
              <CardContent>{systemName}</CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </div>
  );
};
