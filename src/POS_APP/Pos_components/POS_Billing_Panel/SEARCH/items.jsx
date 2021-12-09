import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from "@material-ui/core";

//components
import { NoSystemsBanner } from "../../../../components/userhome/possystems/noSystemsBanner";

//styles
import { styles } from "./searchStyles";

export const SmallItemCard = () => {
  //stock items
  const stockItems = useSelector((store) => store.systemStock);

  //style config
  const classes = styles()();

  if (stockItems && stockItems.length > 0) {
    return (
      <div style={{ height: window.innerHeight, overflow: "scroll" }}>
        <Box mr={2} ml={2} mb={3}>
          <Grid container justifyContent="center" spacing={2} mt={3}>
            {stockItems.map((item) => (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Paper>
                  <Card>
                    <CardActionArea className={classes.itemCardRoot}>
                      <CardMedia
                        image={item.itemImage}
                        title={item.itemCode}
                        className={classes.itemCardContentBox}
                      />

                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        m={1}
                      >
                        <Box className={classes.itemCardName}>
                          {item.itemCode}
                        </Box>
                        <Box className={classes.itemCardPrice}>
                          $ {item.sellingPrice}
                        </Box>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }

  return (
    <div style={{ height: window.innerHeight, overflow: "scroll" }}>
      <NoSystemsBanner message="No items available..." />
    </div>
  );
};
