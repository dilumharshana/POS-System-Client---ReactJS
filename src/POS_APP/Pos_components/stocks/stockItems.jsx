import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { SearchStocks } from "./components/searchStocks";
import { StockItemList } from "./components/stockItemList";

//components

export const StockItems = (props) => {
  const searched_stock_items = useSelector((store) => store.stockItemSearch);

  const systemStock = useSelector((store) => store.systemStock);
  const systemNamenameId = useSelector((store) => store.currentSystem.nameId);

  if (searched_stock_items.length > 0)
    return (
      <>
        <Grid container direction="column" alignItems="center" lg={6} xl={6}>
          <SearchStocks />
          {systemStock
            .filter(
              (item) =>
                item.hidden === false &&
                item.itemName.includes(searched_stock_items)
            )
            .map((item) => (
              <StockItemList
                item={{ ...item, systemNamenameId }}
                key={item.itemCode}
              />
            ))}
        </Grid>
      </>
    );

  return (
    <>
      <Grid container direction="column" alignItems="center" lg={6} xl={6}>
        <SearchStocks />
        {systemStock
          .filter((item) => item.hidden === false)
          .map((item) => (
            <StockItemList
              item={{ ...item, systemNamenameId }}
              key={item.itemCode}
            />
          ))}
      </Grid>
    </>
  );
};
