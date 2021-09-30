import { Grid } from "@material-ui/core";
import React from "react";

//components
import { StockItems } from "../Pos_components/stocks/stockItems";

export const Stocks = (props) => {
  return (
    <>
      <Grid container>
        <StockItems />
      </Grid>
    </>
  );
};
