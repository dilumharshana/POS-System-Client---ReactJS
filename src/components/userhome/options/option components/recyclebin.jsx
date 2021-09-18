import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { toast } from "react-toastify";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import RestoreIcon from "@material-ui/icons/Restore";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

//restore
import { restore } from "./restore";

//actions
import { setUserData } from "../../../../state/actions/actionLoadUser/setUserData";

//styles
import { styles } from "../optionStyles";
import "react-toastify/dist/ReactToastify.css";

export const Recyclebin = () => {
  const [height, setheight] = useState(false);
  const loadUser = bindActionCreators(setUserData, useDispatch());
  const history = useHistory();

  const classes = styles(height)();

  const { _id, isPremium, removedSystems, possystems } = useSelector(
    (store) => store.currentUser
  );

  //handle restore
  const handleRestore = async (systemID, systemName) => {
    try {
      await restore(isPremium, possystems, systemID, systemName, _id, history);
      loadUser();
    } catch (error) {
      toast.error(error);
    }
  };

  if (removedSystems && removedSystems.length > 0)
    return (
      <Grid>
        <Paper elevation={2}>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.recycleBin}
          >
            <Box mr={3} ml={2}>
              <AutoDeleteIcon />
            </Box>
            <Box>Recycled Systems</Box>
            <Box ml={3}>
              <IconButton onClick={() => setheight(!height)}>
                {height ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
          </Box>
          <div className={classes.systemList}>
            <List>
              {removedSystems &&
                removedSystems.map((system) => (
                  <ListItem key={system.id}>
                    <ListItemText
                      primary={system.name}
                      secondary={`On : ${system.date}`}
                    />

                    <Avatar>
                      <IconButton
                        onClick={() => handleRestore(system.id, system.name)}
                      >
                        <RestoreIcon className={classes.restoreBtn} />
                      </IconButton>
                    </Avatar>
                  </ListItem>
                ))}
            </List>
          </div>
        </Paper>
      </Grid>
    );
  return null;
};
