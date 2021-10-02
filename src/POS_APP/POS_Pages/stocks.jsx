import { Grid } from "@material-ui/core";

//components
import { AddStockItems } from "../Pos_components/stocks/addStockItems";
import { StockItems } from "../Pos_components/stocks/stockItems";

export const Stocks = (props) => {
  return (
    <>
      <Grid container>
        <StockItems />
        <AddStockItems />
      </Grid>
    </>
  );
};
