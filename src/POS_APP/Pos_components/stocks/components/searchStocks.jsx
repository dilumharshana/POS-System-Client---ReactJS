import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TextField, InputAdornment } from "@material-ui/core";
import { Box } from "@mui/system";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

//styles
import { styles } from "./stocksStyles";

//actions
import { searchStockItem } from "../../../../state/actions/actionStockItemSearch/actionStockItemSearch";

export const SearchStocks = () => {
  //removeing searched stock items from redux store when this component is unmount
  useEffect(() => {
    return () => {
      setStockItem("");
    };
  }, []);

  //set actions
  const setStockItem = bindActionCreators(searchStockItem, useDispatch());

  const classes = styles()();
  return (
    <>
      <Box className={classes.root} p={3} mt={2} mb={2}>
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
          onChange={(e) => setStockItem(e.target.value)}
        />
      </Box>
    </>
  );
};
