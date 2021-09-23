import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Box, InputAdornment, Paper, TextField } from "@material-ui/core";
import React from "react";
import { Search } from "@material-ui/icons";

//actions
import { setSearch } from "../../../../state/actions/actionSystemSearch/setSystemSearch";

//styles
import { styles } from "../../possystems/possystemsStyles";
export const SystemSearch = (props) => {
  const classes = styles()();

  const setSystemSearch = bindActionCreators(setSearch, useDispatch());
  const searchBoxValue = useSelector((store) => store.systemSearch);

  return (
    <Box className={classes.seacrhRoot} ml={2} mr={2} mb={3}>
      <form>
        <TextField
          fullwidth
          label="Search System"
          variant="outlined"
          value={searchBoxValue}
          onChange={(e) => setSystemSearch(e)}
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
