import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Image from "react-bootstrap/Image";

//styles
import { styles } from "./stocksStyles";

export const StockItemList = ({ item }) => {
  const classes = styles()();
  const {
    _id,
    itemCode,
    itemName,
    cashPrice,
    sellingPrice,
    itemImage,
    quantity,
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
                <IconButton>
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
            <Image
              src={
                "https://dilumharshana.s3.ap-south-1.amazonaws.com/7631906-324.jpg"
              }
              width="100%"
              fluid
              alt={itemCode}
              rounded
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
