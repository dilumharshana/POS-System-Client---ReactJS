import { Grid } from "@material-ui/core";

//components
import { Search } from "./search";
import { SmallItemCard } from "./items";

export const SearchPanel = (props) => (
  <Grid>
    <Search />
    <SmallItemCard />
  </Grid>
);
