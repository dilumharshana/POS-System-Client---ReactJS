import { Grid } from "@material-ui/core";
import React from "react";
import { SearchStocks } from "./components/searchStocks";

//components

export const StockItems = (props) => {
  return (
    <>
      <Grid container direction="column" alignItems="center" lg={6} xl={6}>
        <SearchStocks />
      </Grid>
    </>
  );
};
