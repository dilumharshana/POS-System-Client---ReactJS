import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Box } from "@mui/system";
import jsPDF from "jspdf";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

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

  const systemStock = useSelector((state) => state.systemStock);

  //pdf generaot
  const stockPdf = () => {
    const doc = new jsPDF("p", "pt");

    doc.text(10, 10, "STOCK MANAGER");
    doc.text(10, 10, "STOCK MANAGER");
    doc.text(10, 10, "STOCK MANAGER");
    doc.text(10, 10, "STOCK MANAGER");

    doc.save();
  };

  const classes = styles()();
  return (
    <>
      <Box display="flex" alignItems="center">
        <Box
          className={classes.root}
          p={3}
          mt={2}
          mb={2}
          style={{ width: "90%" }}
        >
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
        <Box className={classes.root} p={3} mt={2} mb={2}>
          <IconButton onClick={() => stockPdf()}>
            <LocalPrintshopIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
