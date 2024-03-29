import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HideSourceIcon from "@mui/icons-material/HideSource";
import Image from "react-bootstrap/Image";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

//component
import { ConfirmationBox } from "../../../Pos_components/confirmation Box/confirmationBox";

//styles
import { styles } from "./stocksStyles";
import "react-toastify/dist/ReactToastify.css";

//configs
import { jsonConfig } from "../../../../POS_APP/configs/jsonConfig";

//actions
import { setStock } from "../../../../state/actions/actionSetStock/actionSetStock";
import { setSelectItem } from "../../../../state/actions/actionSelectedStockItem/actionSelectedStockItem";

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

//hide item
const hideItem = (systemNamenameId, itemCode) => {
  try {
    axios.post(
      "/api/useposapp/stock/hide",
      { systemNamenameId, itemCode },
      jsonConfig
    );
  } catch (error) {
    console.log(error);
  }
};

export const StockItemList = ({ item }) => {
  //states
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openHideDialog, setOpenHideDialog] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const classes = styles()();

  //setting actions
  const refreshStock = bindActionCreators(setStock, useDispatch());
  const setSelectedStockItem = bindActionCreators(setSelectItem, useDispatch());

  const {
    itemCode,
    itemName,
    cashPrice,
    sellingPrice,
    itemImage,
    quantity,
    systemNamenameId,
    description,
  } = item;

  const history = useHistory();
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

              {/* //card actions (delete hide edit description) */}

              <CardActions className={classes.cardActionArea}>
                <Box display="flex" style={{ width: "100%" }}>
                  {/* //delete icon */}
                  <Box>
                    <IconButton onClick={() => setOpenDeleteDialog(true)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>

                  {/* //hide icon */}
                  <Box>
                    <IconButton onClick={() => setOpenHideDialog(true)}>
                      <HideSourceIcon />
                    </IconButton>
                  </Box>

                  {/* //edit icon */}
                  <Box>
                    <IconButton
                      onClick={() => {
                        setSelectedStockItem(item);
                        history.push("/editItem");
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Box>

                  {/* //description show icon */}
                  {description && (
                    <Box style={{ marginLeft: "auto" }}>
                      <IconButton
                        onClick={() => setShowDescription(!showDescription)}
                      >
                        {showDescription ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </IconButton>
                    </Box>
                  )}
                </Box>
              </CardActions>

              {/* //item description box */}
              <div style={{ height: showDescription ? "auto" : 0 }}>
                <Box p={2}>{description}</Box>
              </div>
            </Card>

            {/* //hide confiration box */}
            <ConfirmationBox
              title="This item will temporally disapear from the system and you can restore item from the settings. Confirm Hide !"
              open={openHideDialog}
              close={() => setOpenHideDialog(false)}
              dialogAction={
                <>
                  {/* //cancel buton */}
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => setOpenHideDialog(false)}
                  >
                    CANCEL
                  </Button>

                  {/* //delete button */}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      hideItem(systemNamenameId, itemCode);
                      refreshStock(systemNamenameId);
                      toast.info("Item hidden successfully !", {
                        position: "top-center",
                        theme: "colored",
                        autoClose: 2000,
                      });
                    }}
                  >
                    HIDE
                  </Button>
                </>
              }
            />

            {/* //delete confiration box */}
            <ConfirmationBox
              title="Confirm delete"
              open={openDeleteDialog}
              close={() => setOpenDeleteDialog(false)}
              dialogAction={
                <>
                  {/* //cancel buton */}
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => setOpenDeleteDialog(false)}
                  >
                    CANCEL
                  </Button>

                  {/* //delete button */}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      deleteItem(systemNamenameId, itemCode);
                      refreshStock(systemNamenameId);
                      toast.info("Item deleted successfully !", {
                        position: "top-center",
                        theme: "colored",
                        autoClose: 2000,
                      });
                    }}
                  >
                    DELETE
                  </Button>
                </>
              }
            />
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
