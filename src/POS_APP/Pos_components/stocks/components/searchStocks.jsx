import { TextField, InputAdornment } from "@material-ui/core";
import { Box } from "@mui/system";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

//styles
import { styles } from "./stocksStyles";

export const SearchStocks = () => {
  const classes = styles()();
  return (
    <>
      <Box className={classes.root} p={3} mt={2}>
        <TextField
          fullWidth
          variant="filled"
          label="Search stocks"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ManageSearchIcon fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};
