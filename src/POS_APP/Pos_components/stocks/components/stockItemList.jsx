import axios from "axios";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Image from "react-bootstrap/Image";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

//styles
import { styles } from "./stocksStyles";
import "react-toastify/dist/ReactToastify.css";

//configs
import { jsonConfig } from "../../../../POS_APP/configs/jsonConfig";

//actions
import { setStock } from "../../../../state/actions/actionSetStock/actionSetStock";

//delete Item
const deleteItem = (systemNamenameId, itemCode) => {
  try {
    axios.post(
      "/api/useposapp/stock/remove",
      { systemNamenameId, itemCode },
      jsonConfig
    );
  } catch (error) {
    console.log(error);
  }
};

export const StockItemList = ({ item }) => {
  const classes = styles()();

  //setting actions
  const refreshStock = bindActionCreators(setStock, useDispatch());

  const {
    _id,
    itemCode,
    itemName,
    cashPrice,
    sellingPrice,
    itemImage,
    quantity,
    systemNamenameId,
  } = item;
  return (
    <Box className={classes.stockItemCardRoot} mb={3}>
      <Paper elevation={3} className={classes.wrapperPaper}>
        <Box elevation={3} display="flex">
          <Box className={classes.descriptionBox}>
            <Card className={classes.rootCard}>
              {/* //item title */}
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.itemName}>
                    {itemName}
                  </Typography>
                }
              />
              <CardContent>
                <Box
                  className={classes.cardContentRootBox}
                  display="flex"
                  alignItems="center"
                >
                  {/* //cashprice box */}
                  <Box className={classes.prices}>
                    <CardActionArea>
                      <Box mb={2} className={classes.dataTitles}>
                        CashPrice
                      </Box>
                      <Box className={classes.values}>{cashPrice}</Box>
                    </CardActionArea>
                  </Box>

                  {/* //sellprice box */}
                  <Box className={classes.prices}>
                    <CardActionArea>
                      <Box mb={2} className={classes.dataTitles}>
                        Sell Proce
                      </Box>
                      <Box className={classes.values}>{sellingPrice}</Box>
                    </CardActionArea>
                  </Box>

                  {/* //quantity box */}
                  <Box className={classes.quantity}>
                    <CardActionArea>
                      <Box mb={2} className={classes.dataTitles}>
                        Stocks
                      </Box>
                      <Box className={classes.values}>{quantity}</Box>
                    </CardActionArea>
                  </Box>
                </Box>
              </CardContent>

              {/* //card actions (delete edit) */}
              <CardActions className={classes.cardActionArea}>
                {/* //delete icon */}
                <IconButton
                  onClick={() => {
                    deleteItem(systemNamenameId, itemCode);
                    refreshStock();
                    toast.info("Item deleted successfully !", {
                      position: "top-center",
                      theme: "colored",
                      autoClose: 2000,
                    });
                  }}
                >
                  <DeleteIcon />
                </IconButton>

                {/* //edit icon */}
                <IconButton>
                  <EditIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>

          {/* //item image */}
          <Box className={classes.imageBox}>
            <Image src={itemImage} width="100%" fluid alt={itemCode} rounded />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
