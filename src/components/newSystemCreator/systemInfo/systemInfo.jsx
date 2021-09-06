import React from "react";
import {
  Grid,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@material-ui/core";

//icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import GroupIcon from "@material-ui/icons/Group";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AddIcon from "@material-ui/icons/Add";

export const SystemInfo = (props) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="center" mt={3}>
          <h3>Featres you have</h3>
        </Box>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* //feature list */}
        <Box ml={3} mr={3} mt={2}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ShowChartIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Mange your Stocks" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AttachMoneyIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Manage your sales" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <GroupIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Manage your employees" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssessmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Analize your biz" />
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Box>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssessmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Manage your customer" />
            </ListItem>
          </List>
        </Box>
        <Box style={{ marginleft: "auto" }}>
          <Button variant="contained" color="primary">
            Try Premium
          </Button>
        </Box>
      </Grid>
      <Grid item item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="center" mt={3}>
          <Box>
            <IconButton
              style={{ border: "1px solid black" }}
              onClick={props.changePage}
            >
              <NavigateBeforeIcon color="primary" />
            </IconButton>
          </Box>
          <Box ml={2}>
            <IconButton style={{ border: "1px solid black" }}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
