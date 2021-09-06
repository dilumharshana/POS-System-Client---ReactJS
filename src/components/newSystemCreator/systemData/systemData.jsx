import React from "react";
import {
  Grid,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export const SystemData = (props) => {
  return (
    <form action="">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Box display="flex" justifyContent="center" mt={3}>
            <h3>Create New System</h3>
          </Box>
        </Grid>
        <Grid item>
          <Box ml={3} mr={3} mt={4}>
            <TextField type="text" fullWidth label="System Name" />
          </Box>
        </Grid>
        <Grid item>
          <Box ml={3} mr={3} mt={3}>
            <TextField type="password" fullWidth label="System Name" />
          </Box>
        </Grid>
        <Grid item>
          <Box ml={3} mr={3} display="flex" justifyContent="center" mt={3}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
            >
              <MenuItem value="Grocery">Grocery</MenuItem>
              <MenuItem value="Hotel / Restuarnat">Hotel / Restuarnat</MenuItem>
              <MenuItem value="Phamacy">Phamacy</MenuItem>
              <MenuItem value="Textile">Textile</MenuItem>
              <MenuItem value="Super Market"></MenuItem>
            </Select>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="center" mt={5}>
            <IconButton
              style={{ border: "1px solid black" }}
              onClick={props.changePage}
            >
              <NavigateNextIcon color="primary" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
