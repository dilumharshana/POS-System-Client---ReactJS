import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { SearchStocks } from "./components/searchStocks";
import { StockItemList } from "./components/stockItemList";

//components

export const StockItems = (props) => {
  const systemStock = useSelector((store) => store.systemStock);
  return (
    <>
      <Grid container direction="column" alignItems="center" lg={6} xl={6}>
        <SearchStocks />
        {systemStock.map((item) => (
          <StockItemList item={item} key={item.itemCode} />
        ))}
      </Grid>
    </>
  );
};
