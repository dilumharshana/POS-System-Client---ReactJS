import { Box, InputAdornment, Paper, TextField } from "@material-ui/core";
import React from "react";
import { Search } from "@material-ui/icons";

//styles
import { styles } from "../possystems/possystemsStyles";

export const SystemSearch = () => {
  const classes = styles()();
  return (
    <Box className={classes.seacrhRoot} ml={2} mr={2} mb={3}>
      <form>
        <TextField
          fullwidth
          label="Search System"
          variant="outlined"
          className={classes.searchBox}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Box>
  );
};
